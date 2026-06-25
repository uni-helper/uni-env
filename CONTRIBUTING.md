# 参与贡献

感谢你对 `@uni-helper/uni-env` 的关注！本文档说明仓库结构、本地开发流程，以及本库最重要的约定——环境变量的读取规则。

## 前置条件

- Node.js >= 18
- pnpm >= 10.34.4（项目已通过 `packageManager` 字段固定版本）
- Git

## 仓库结构

```
uni-env/
├── src/
│   ├── index.ts     # 全部环境变量与平台判断导出
│   └── utils.ts     # toBoolean / parseJSON 工具函数
├── test/
│   └── index.test.ts # 导出清单快照测试
├── dist/            # 构建产物（发布到 npm 的内容）
└── package.json
```

## 本地开发

```bash
pnpm install
pnpm run dev     # 监听模式构建
pnpm run build   # 生成 dist/
```

## 测试与检查

```bash
pnpm run check-types   # tsc --noEmit
pnpm run lint          # eslint
pnpm run test          # vitest run
```

新增或删除导出时，`test/index.test.ts` 的内联快照会失败，用 `pnpm exec vitest run -u` 更新，并确认 diff 仅包含预期变更。

## 环境变量读取规则（核心约定）

本库是构建时环境库，依赖 uni-app 在构建期通过 Vite `define` 对 `process.env.*` 字面量做静态替换。读取方式必须按以下规则区分，写错会导致取不到值或运行时报错。

uni-app 的注册表在 `packages/uni-cli-shared/src/env/define.ts` 的 `initDefine()`，每次升级 uni-app 后应对照该文件重新核查本库的导出。

### 已注册的键 → 用 `process.env.X`

构建期被替换为字面量，所有目标（Node / H5 / 小程序）都能拿到正确值，且能触发 dead-code elimination——其它平台的分支会被打包器裁掉。这是本库能实现「按平台 tree-shaking」的基础。

### 未注册的键 → 用 `env.X`（来自 `std-env`）

`env` 是 `std-env` 导出的 Proxy，运行时按以下顺序回退读取：`process?.env → import.meta.env → Deno → __env__ → globalThis`，不会静态替换。这类变量通常只在 Node CLI / SSR 上下文有意义。

如果误把未注册的键写成 `process.env.X`，在没有 `process` 全局的运行时（原始浏览器、部分小程序）会抛 `process is not defined`；`env.X` 则安全回退到 `undefined`。

### 判定流程

```
新增一个 env 变量导出
  │
  ├─ 该键是否在 uni-app initDefine() 中注册？
  │    ├─ 是 → process.env.X
  │    └─ 否 → env.X
```

`initDefine()` 未传 `stringifyBoolean`（见 `vite-plugin-uni/src/config/define.ts` 调用处），因此部分键在静态替换后是布尔字面量（如 `UNI_DEBUG`、`RUN_BY_HBUILDERX`、`UNI_APP_X_NEW_STYLE_ISOLATION`），需用 `as unknown as boolean` 转换类型；其余注入为字符串，用 `as string` / `as OptionalString` / 对应字面量联合类型。

### 核查方法

1. 打开 uni-app 的 `packages/uni-cli-shared/src/env/define.ts`，列出 `initDefine()` 返回对象中以 `'process.env.'` 为前缀的键。
2. 对照 `src/index.ts` 中每个导出使用的读取方式。
3. 已注册键必须用 `process.env.X`；未注册键必须用 `env.X`。

## 重要提醒

本库提供的是构建期注入的环境值，**不是运行时条件编译**。运行时通过 `import` 读取的常量在代码加载时已求值，无法像官方条件编译那样按平台裁掉整段代码。要做条件编译请使用官方的 [跨端兼容 - 条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor) 或 [unplugin-preprocessor-directives](https://github.com/KeJunMao/unplugin-preprocessor-directives)。
