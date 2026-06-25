<a href="https://uni-helper.js.org/uni-env"><img src="./banner.svg" alt="banner" width="100%"/></a>

<p style="text-align: center">
  <a href="https://github.com/uni-helper/uni-env/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/uni-env?colorA=005947&colorB=eee&style=for-the-badge" alt="stars"></a>
  <a href="https://www.npmjs.com/package/@uni-helper/uni-env"><img src="https://img.shields.io/npm/dm/@uni-helper/uni-env?colorA=005947&colorB=eee&style=for-the-badge" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@uni-helper/uni-env"><img src="https://img.shields.io/npm/v/@uni-helper/uni-env?colorA=005947&colorB=eee&style=for-the-badge" alt="version"></a>
</p>

<p style="text-align: center">
  <a href="https://deepwiki.com/uni-helper/uni-env"><img src="https://deepwiki.com/badge.svg" alt="deepwiki"></a>
</p>

在 uni-app 中优雅地判断当前环境。

## 安装

```bash
pnpm i @uni-helper/uni-env
```

## 使用

📖 **请阅读[完整文档](https://uni-helper.js.org/uni-env)了解完整使用方法！**

```ts
import { isMpWeixin, platform, appId } from '@uni-helper/uni-env'
```

:::tip 构建期而非运行时
本库读取的是 uni-app 在**构建期**注入的环境值（通过 Vite `define` 静态替换 `process.env.*`），不是运行时条件编译。要做条件编译请使用官方的 [跨端兼容 - 条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor) 或 [unplugin-preprocessor-directives](https://github.com/KeJunMao/unplugin-preprocessor-directives)。
:::

## 参与贡献

环境变量读取规则等开发约定见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 许可

MIT
