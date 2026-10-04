<a href="https://uni-helper.js.org/uni-env"><img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-env@main/banner.svg" alt="banner" width="100%"/></a>

# @uni-helper/uni-env

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-env@main/logo.svg" alt="logo" width="256" height="256" />
</p>

<p align="center">
  <a href="https://github.com/uni-helper/uni-env/blob/main/LICENSE"><img src="https://img.shields.io/github/license/uni-helper/uni-env?style=for-the-badge&labelColor=005947&color=eee" alt="License"></a>
  <a href="https://github.com/uni-helper/uni-env/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/uni-env?style=for-the-badge&labelColor=005947&color=eee" alt="GitHub Stars"></a>
  <a href="https://npmx.dev/package/@uni-helper/uni-env"><img src="https://img.shields.io/npm/v/@uni-helper/uni-env?style=for-the-badge&labelColor=005947&color=eee" alt="NPM version"></a>
  <a href="https://npmx.dev/package/@uni-helper/uni-env"><img src="https://img.shields.io/npm/dm/@uni-helper/uni-env?style=for-the-badge&labelColor=005947&color=eee" alt="npm downloads"></a>
</p>
<p align="center">
  <a href="https://github.com/kejunmao"><img src="https://img.shields.io/badge/Author-KeJun-blue?style=for-the-badge" alt="Author"></a>
  <a href="https://github.com/ModyQyW"><img src="https://img.shields.io/badge/Maintainer-ModyQyW-blue?style=for-the-badge" alt="Maintainer"></a>
</p>

在 uni-app 中优雅地判断当前环境。

不想看文档？直接问 AI 🤖 <a href="https://deepwiki.com/uni-helper/uni-env"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>

> **请考虑持续[赞助](https://github.com/ModyQyW/sponsors)以维持该项目的持续健康发展，非常感谢！🙏**

## 安装

```bash
pnpm i @uni-helper/uni-env
```

## 使用

📖 **请阅读[完整文档](https://uni-helper.js.org/uni-env)了解完整使用方法。**

```ts
import { appId, isMpWeixin, platform } from '@uni-helper/uni-env'
```

> **构建期而非运行时**：本库读取的是 uni-app 在**构建期**注入的环境值（通过 Vite `define` 静态替换 `process.env.*`），不是运行时条件编译。要做条件编译请使用官方的 [跨端兼容 - 条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor) 或 [unplugin-preprocessor-directives](https://github.com/KeJunMao/unplugin-preprocessor-directives)。

## 参与贡献

环境变量读取规则等开发约定见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 许可

MIT
