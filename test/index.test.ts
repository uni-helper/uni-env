import { expect, it, describe } from "vitest";
import * as uniEnv from "../src";

describe("uni-env", () => {
  it("has all exports (dummy)", () => {
    expect(Object.keys(uniEnv)).toMatchInlineSnapshot(`
      [
        "builtInPlatforms",
        "platform",
        "utsPlatform",
        "appPlatform",
        "subPlatform",
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
        "hasDarkMode",
        "hasSourcemap",
        "isMpPlugin",
        "isMinimize",
        "isSSRClient",
        "isSSRServer",
        "compiler",
        "nvueCompiler",
        "nvueStyleCompiler",
        "compilerVersion",
        "compilerVersionType",
        "cliContext",
        "inputDir",
        "outputDir",
        "statTitleJson",
        "customContext",
        "customScript",
        "customDefine",
        "subpackage",
        "renderer",
        "rendererNative",
      ]
    `);
  });
});
