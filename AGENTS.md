# AGENTS.md

## 项目概述

`@uni-helper/uni-env`：在 uni-app 中优雅地判断当前环境。构建期环境库，依赖 uni-app 在构建时通过 Vite `define` 对 `process.env.*` 字面量做静态替换。单包仓库，核心只有两个文件：

- `src/index.ts` —— 全部环境变量与平台判断导出（唯一入口）
- `src/utils.ts` —— `toBoolean` / `parseJSON` 工具函数

`dist/` 为构建产物，已 gitignore，不入库。

## 常用命令

```bash
pnpm install            # 安装依赖
pnpm run dev            # tsdown 监听模式构建
pnpm run build          # 构建 dist/（esm + cjs + dts）
pnpm run lint           # eslint 检查
pnpm run lint:fix       # eslint 自动修复
pnpm run test           # vitest run
pnpm run typecheck      # tsc --noEmit
```

本地环境：Node 26（见 `.node-version`）、pnpm 12.3.4（`packageManager` 字段固定）。测试直接跑 `src/`，不需要先 build；CI（`.github/workflows/ci.yml`）会在 Node 22/24/26 × 三系统上依次执行 build → lint → test → typecheck，提交前请在本地把后三项跑绿。

## 环境变量读取规则（核心约定）

写错读取方式会导致取不到值或运行时报错，改 `src/index.ts` 前必读：

- **uni-app 已注册的键 → `process.env.X`**。构建期被替换为字面量，Node / H5 / 小程序都拿到正确值，且能触发 dead-code elimination 裁掉其它平台分支。
- **未注册的键 → `env.X`**（`std-env` 导出的 Proxy）。运行时回退读取，不做静态替换；这类变量通常只在 Node CLI / SSR 上下文有意义。写成 `process.env.X` 会在无 `process` 全局的运行时（浏览器、部分小程序）抛 `process is not defined`。
- **判定方法**：查 uni-app 源码 `packages/uni-cli-shared/src/env/define.ts` 的 `initDefine()`，返回对象中以 `process.env.` 为前缀的键即已注册。升级 uni-app 版本后应对照该文件重新核查全部导出。
- **类型断言**：`initDefine()` 未传 `stringifyBoolean`，部分键注入为布尔字面量（如 `UNI_DEBUG`、`RUN_BY_HBUILDERX`、`UNI_APP_X_NEW_STYLE_ISOLATION`），用 `as unknown as boolean`；其余为字符串，用 `as string` / `as OptionalString` / 对应字面量联合类型。
- **每个导出保留 JSDoc**：注明来源 `process.env.X` 键、注入类型，并保留指向 uni-app 源码的 `@link`。
- 本库是构建期注入的环境值，不是运行时条件编译；导出的常量在代码加载时已求值，无法按平台裁掉整段代码。

## 测试

`test/index.test.ts` 用内联快照锁定全部导出清单。新增或删除导出后快照会失败：先确认失败 diff 只是预期变更，再用 `pnpm exec vitest run -u` 更新。快照内容必须与实际导出严格一致，不要手工编辑快照——注释行也参与比较，会导致快照在任何机器上都失败。

## 代码风格

- ESLint 用 `@antfu/eslint-config` 默认规则（见 `eslint.config.js`），不使用 Prettier；风格问题一律交给 `pnpm run lint:fix`。
- TypeScript strict 模式（`tsconfig.json`）。
- 修改后运行 `pnpm run lint && pnpm run test && pnpm run typecheck`，全绿才算完成。

## 提交与发布

- 提交信息遵循 Conventional Commits（`feat` / `fix` / `docs` / `chore` / `ci`，破坏性变更用 `feat!:`）。
- 发布走 `pnpm run release`（bumpp 生成版本与 tag）；push tag 后由 `release.yml` 自动生成 changelog 并 `pnpm publish`。不要手动执行 `npm publish`。
