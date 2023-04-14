import { expect, it, describe } from "vitest";
import * as uniEnv from "../src";

describe("uni-env", () => {
  it("has all exports (dummy)", () => {
    expect(Object.keys(uniEnv)).toMatchInlineSnapshot(`
      [
        "platform",
        "utsPlatform",
        "appPlatform",
        "subPlatform",
        "cliContext",
        "inputDir",
        "outputDir",
        "hasDarkMode",
        "hasSourcemap",
        "compiler",
        "nvueCompiler",
        "nvueStyleCompiler",
        "compilerVersion",
        "compilerVersionType",
        "statTitleJson",
        "customContext",
        "customScript",
        "customDefine",
        "subpackage",
        "isMpPlugin",
        "renderer",
        "rendererNative",
        "isMinimize",
        "isSSRClient",
        "isSSRServer",
        "isH5",
        "isApp",
        "isAppAndroid",
        "isAppIOS",
        "isMp",
        "isMpWeixin",
        "isMpAlipay",
        "isMpBaidu",
        "isMpKuaishou",
        "isMpQQ",
        "isMpToutiao",
        "isQuickapp",
        "isQuickappUnion",
        "isQuickappHuawei",
      ]
    `);
  });
});
