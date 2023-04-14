# @uni-helper/uni-env

> 检测当前 uni-app 的环境变量

## 安装

```sh
# Using Yarn
yarn add @uni-helper/uni-env

# Using npm
npm i @uni-helper/uni-env

# Using pnpm
pnpm i @uni-helper/uni-env
```

## 使用

```js
// ESM
import { isMpWeixin } from "@uni-helper/uni-env";

// CommonJS
const { isMp } = require("@uni-helper/uni-env");
```

你可以从 [./src/index.ts](./src/index.ts) 中查看更多标志以及如何判断的。

## 注意

这个包更多的是为插件开发者提供，如果你在运行时引入并不能做到条件编译。

要做条件编译的话，请使用官方的 [跨端兼容 - 条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor)，如果你需要更好的条件编译，你可以使用 [vite-plugin-conditional-compiler](https://github.com/KeJunMao/vite-plugin-conditional-compile)

## 协议

[MIT](./LICENSE)
