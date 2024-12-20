import { describe, expect, it } from 'vitest'
import * as uniEnv from '../src'

describe('uni-env', () => {
  it('has all exports (dummy)', () => {
    expect(Object.keys(uniEnv)).toMatchInlineSnapshot(`
      [
        "builtInPlatforms",
        "platform",
        "appPlatform",
        "subPlatform",
        "utsPlatform",
        "isH5",
        "isWeb",
        "isApp",
        "isAppPlus",
        "isAppHarmony",
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
        "utsJsCodeFormat",
        "utsModuleType",
        "utsModulePrefix",
        "utsTargetLanguage",
        "inputDir",
        "outputDir",
        "cliContext",
        "subpackage",
        "mpPlugin",
        "isMpPlugin",
        "compilerVersion",
        "compilerVersionType",
        "hbuilderxPlugins",
        "renderer",
        "nvueCompiler",
        "nvueStyleCompiler",
        "appCodeSpliting",
        "automatorWsEndpoint",
        "automatorAppWebview",
        "automatorAppWebviewSrc",
        "h5Base",
        "h5Browser",
        "customScript",
        "customDefine",
        "customContext",
        "minimize",
        "isMinimize",
        "uvue",
        "isUVue",
        "uvueTargetLanguage",
        "compiler",
        "rendererNative",
        "nvueAppStyles",
        "appChangedFiles",
        "appChangedPages",
        "darkMode",
        "hasDarkMode",
        "hxUseBaseType",
        "hxDependenciesDir",
        "appX",
        "isAppX",
        "appXCacheDir",
        "hxVersion",
        "appXPageCount",
        "appXTsc",
        "appXSingleThread",
        "appXSetup",
        "appXUVueScriptEngine",
        "compileTarget",
        "compileCloudDir",
        "modulesEncryptCacheDir",
        "appPackType",
        "appHarmonyProjectPath",
        "statTitleJson",
        "sourcemap",
        "hasSourcemap",
        "ssrClient",
        "isSSRClient",
        "ssrServer",
        "isSSRServer",
      ]
    `)
  })
})
