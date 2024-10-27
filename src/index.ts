/* eslint-disable node/prefer-global/process */
import { parseJSON, toBoolean } from './utils'

export type OptionalBooleanString = 'true' | 'false' | undefined
export type OptionalString = string | undefined

/**
 * `process.env.UNI_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L9}
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-uni-app.d.ts#L24}
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-uni-app.d.ts#L192-L209}
 */
export type BuiltInPlatform = 'h5' | 'web' | 'app' | 'app-plus' | 'app-harmony' | 'mp-360' | 'mp-alipay' | 'mp-baidu' | 'mp-qq' | 'mp-toutiao' | 'mp-weixin' | 'mp-kuaishou' | 'mp-lark' | 'mp-jd' | 'mp-xhs' | 'quickapp-webview' | 'quickapp-webview-huawei' | 'quickapp-webview-union'

export const builtInPlatforms = ['h5', 'web', 'app', 'app-plus', 'app-harmony', 'mp-360', 'mp-alipay', 'mp-baidu', 'mp-qq', 'mp-toutiao', 'mp-weixin', 'mp-kuaishou', 'mp-lark', 'mp-jd', 'mp-xhs', 'quickapp-webview', 'quickapp-webview-huawei', 'quickapp-webview-union'] as BuiltInPlatform[]

/**
 * `process.env.UNI_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L9}
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-uni-app.d.ts#L24}
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-uni-app.d.ts#L192-L209}
 */
export const platform = process.env.UNI_PLATFORM as BuiltInPlatform

/**
 * `process.env.UNI_APP_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L10}
 */
export type AppPlatform = 'android' | 'ios' | 'harmony' | undefined

/**
 * `process.env.UNI_APP_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L10}
 */
export const appPlatform = process.env.UNI_APP_PLATFORM as AppPlatform

/**
 * `process.env.UNI_SUB_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L11}
 */
export type SubPlatform = 'quickapp-webview-huawei' | 'quickapp-webview-union' | undefined

/**
 * `process.env.UNI_SUB_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L11}
 */
export const subPlatform = process.env.UNI_SUB_PLATFORM as SubPlatform

/**
 * `process.env.UNI_UTS_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L12}
 */
export type UtsPlatform = BuiltInPlatform | 'app-android' | 'app-ios' | 'web'

/**
 * `process.env.UNI_UTS_PLATFORM`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L12}
 */
export const utsPlatform = process.env.UNI_UTS_PLATFORM as UtsPlatform

/** Detect if `process.env.UNI_PLATFORM` is `h5` */
export const isH5 = platform === 'h5'

/** Detect if `process.env.UNI_PLATFORM` is `web` */
export const isWeb = platform === 'web'

/** Detect if `process.env.UNI_PLATFORM` is `app` */
export const isApp = platform === 'app'

/** Detect if `process.env.UNI_PLATFORM` is `app-plus` */
export const isAppPlus = platform === 'app-plus'

/** Detect if `process.env.UNI_PLATFORM` is `app-harmony` */
export const isAppHarmony = platform === 'app-harmony'

/** Detect if `process.env.UNI_APP_PLATFORM` is `android` or if `process.env.UNI_UTS_PLATFORM` is `app-android` */
export const isAppAndroid = appPlatform === 'android' || utsPlatform === 'app-android'

/** Detect if `process.env.UNI_APP_PLATFORM` is `ios` or if `process.env.UNI_UTS_PLATFORM` is `app-ios` */
export const isAppIOS = appPlatform === 'ios' || utsPlatform === 'app-ios'

/** Detect if `process.env.UNI_PLATFORM` is `mp-*` */
export const isMp = /^mp-/i.test(platform)

/** Detect if `process.env.UNI_PLATFORM` is `mp-weixin` */
export const isMpWeixin = platform === 'mp-weixin'

/** Detect if `process.env.UNI_PLATFORM` is `mp-alipay` */
export const isMpAlipay = platform === 'mp-alipay'

/** Detect if `process.env.UNI_PLATFORM` is `mp-baidu` */
export const isMpBaidu = platform === 'mp-baidu'

/** Detect if `process.env.UNI_PLATFORM` is `mp-kuaishou` */
export const isMpKuaishou = platform === 'mp-kuaishou'

/** Detect if `process.env.UNI_PLATFORM` is `mp-qq` */
export const isMpQQ = platform === 'mp-qq'

/** Detect if `process.env.UNI_PLATFORM` is `mp-toutiao` */
export const isMpToutiao = platform === 'mp-toutiao'

/** Detect if `process.env.UNI_PLATFORM` is `quickapp-webview*` */
export const isQuickapp = /^quickapp-webview/i.test(platform)

/** Detect if `process.env.UNI_PLATFORM` is `quickapp-webview-union` */
export const isQuickappUnion = platform === 'quickapp-webview-union'

/** Detect if `process.env.UNI_PLATFORM` is `quickapp-webview-huawei` */
export const isQuickappHuawei = platform === 'quickapp-webview-huawei'

/**
 * `process.env.UNI_UTS_JS_CODE_FORMAT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L14}
 */
export type UtsJsCodeFormat = 'cjs' | 'es' | undefined

/**
 * `process.env.UNI_UTS_JS_CODE_FORMAT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L14}
 */
export const utsJsCodeFormat = process.env.UNI_UTS_JS_CODE_FORMAT as UtsJsCodeFormat

/**
 * `process.env.UNI_UTS_MODULE_TYPE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L15}
 */
export type UtsModuleType = 'built-in' | '' | undefined

/**
 * `process.env.UNI_UTS_MODULE_TYPE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L15}
 */
export const utsModuleType = process.env.UNI_UTS_MODULE_TYPE as UtsModuleType

/**
 * `process.env.UNI_UTS_MODULE_PREFIX`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L16}
 */
export const utsModulePrefix = process.env.UNI_UTS_MODULE_PREFIX as OptionalString

/**
 * `process.env.UNI_UTS_TARGET_LANGUAGE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L17}
 */
export type UtsTargetLanguage = 'javascript' | 'kotlin' | 'swift' | 'arkts' | undefined

/**
 * `process.env.UNI_UTS_TARGET_LANGUAGE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L17}
 */
export const utsTargetLanguage = process.env.UNI_UTS_TARGET_LANGUAGE as UtsTargetLanguage

/**
 * `process.env.UNI_INPUT_DIR`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L19}
 */
export const inputDir = process.env.UNI_INPUT_DIR as OptionalString

/**
 * `process.env.UNI_OUTPUT_DIR`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L20}
 */
export const outputDir = process.env.UNI_OUTPUT_DIR as OptionalString

/**
 * `process.env.UNI_CLI_CONTEXT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L21}
 */
export const cliContext = process.env.UNI_CLI_CONTEXT as OptionalString

/**
 * `process.env.UNI_SUBPACKAGE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L22}
 */
export const subpackage = process.env.UNI_SUBPACKAGE as OptionalString

/**
 * `process.env.UNI_MP_PLUGIN`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L23}
 */
export const mpPlugin = process.env.UNI_MP_PLUGIN as OptionalBooleanString

/** Detect if `process.env.UNI_MP_PLUGIN` is set */
export const isMpPlugin = toBoolean(process.env.UNI_MP_PLUGIN)

/**
 * `process.env.UNI_COMPILER_VERSION`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L24}
 */
export const compilerVersion = process.env.UNI_COMPILER_VERSION as OptionalString

/**
 * `process.env.UNI_COMPILER_VERSION`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L25}
 */
export type CompilerVersionType = 'a' | 'r' | undefined

/**
 * `process.env.UNI_COMPILER_VERSION`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L25}
 */
export const compilerVersionType = process.env.UNI_COMPILER_VERSION_TYPE as CompilerVersionType

/**
 * `process.env.UNI_HBUILDERX_PLUGINS`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L26}
 */
export const hbuilderxPlugins = process.env.UNI_HBUILDERX_PLUGINS as OptionalString

/**
 * `process.env.UNI_RENDERER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L27}
 */
export type Renderer = 'native' | undefined

/**
 * `process.env.UNI_RENDERER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L27}
 */
export const renderer = process.env.UNI_RENDERER as Renderer

/**
 * `process.env.UNI_NVUE_COMPILER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L28}
 */
export type NVueCompiler = 'uni-app' | 'weex' | 'vue' | 'vite' | undefined

/**
 * `process.env.UNI_NVUE_COMPILER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L28}
 */
export const nvueCompiler = process.env.UNI_NVUE_COMPILER as NVueCompiler

/**
 * `process.env.UNI_NVUE_STYLE_COMPILER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L29}
 */
export type NVueStyleCompiler = 'uni-app' | 'weex' | undefined

/**
 * `process.env.UNI_NVUE_STYLE_COMPILER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L29}
 */
export const nvueStyleCompiler = process.env.UNI_NVUE_STYLE_COMPILER as NVueStyleCompiler

/**
 * `process.env.UNI_APP_CODE_SPLITING`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L30}
 */
export const appCodeSpliting = process.env.UNI_APP_CODE_SPLITING as OptionalBooleanString

/**
 * `process.env.UNI_AUTOMATOR_WS_ENDPOINT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L31}
 */
export const automatorWsEndpoint = process.env.UNI_AUTOMATOR_WS_ENDPOINT as OptionalString

/**
 * `process.env.UNI_AUTOMATOR_APP_WEBVIEW`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L32}
 */
export const automatorAppWebview = process.env.UNI_AUTOMATOR_APP_WEBVIEW as OptionalString

/**
 * `process.env.UNI_AUTOMATOR_APP_WEBVIEW_SRC`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L33}
 */
export const automatorAppWebviewSrc = process.env.UNI_AUTOMATOR_APP_WEBVIEW_SRC as OptionalString

/**
 * `process.env.UNI_H5_BASE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L34}
 */
export const h5Base = process.env.UNI_H5_BASE as OptionalString

/**
 * `process.env.UNI_H5_BROWSER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L35}
 */
export type H5Browser = 'builtin' | undefined

/**
 * `process.env.UNI_H5_BROWSER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L35}
 */
export const h5Browser = process.env.UNI_H5_BROWSER as H5Browser

/**
 * `process.env.UNI_CUSTOM_SCRIPT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L36}
 */
export const customScript = process.env.UNI_CUSTOM_SCRIPT as OptionalString

/**
 * `process.env.UNI_CUSTOM_DEFINE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L37}
 */
export const customDefine = process.env.UNI_CUSTOM_DEFINE as OptionalString

/**
 * `process.env.UNI_CUSTOM_CONTEXT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L38}
 */
export const customContext = process.env.UNI_CUSTOM_CONTEXT as OptionalString

/**
 * `process.env.UNI_MINIMIZE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L39}
 */
export const minimize = process.env.UNI_MINIMIZE as OptionalBooleanString

/** Detect if `process.env.UNI_MINIMIZE` is set */
export const isMinimize = toBoolean(process.env.UNI_MINIMIZE)

/**
 * `process.env.UNI_UVUE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L40}
 */
export const uvue = process.env.UNI_UVUE as OptionalBooleanString

/** Detect if `process.env.UNI_UVUE` is set */
export const isUVue = toBoolean(process.env.UNI_MINIMIZE)

/**
 * `process.env.UNI_UVUE_TARGET_LANGUAGE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L41}
 */
export type UVueTargetLanguage = 'kotlin' | 'swift' | 'javascript' | undefined

/**
 * `process.env.UNI_UVUE_TARGET_LANGUAGE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L41}
 */
export const uvueTargetLanguage = process.env.UNI_UVUE_TARGET_LANGUAGE as UVueTargetLanguage

/**
 * `process.env.UNI_COMPILER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L42}
 */
export type Compiler = 'vue' | 'nvue' | undefined

/**
 * `process.env.UNI_COMPILER`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L42}
 */
export const compiler = process.env.UNI_COMPILER as Compiler

/**
 * `process.env.UNI_RENDERER_NATIVE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L43}
 */
export type RendererNative = 'appService' | 'pages' | undefined

/**
 * `process.env.UNI_RENDERER_NATIVE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L43}
 */
export const rendererNative = process.env.UNI_RENDERER_NATIVE as RendererNative

/**
 * `process.env.UNI_NVUE_APP_STYLES`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L44}
 */
export const nvueAppStyles = process.env.UNI_NVUE_APP_STYLES as OptionalString

/**
 * `process.env.UNI_APP_CHANGED_FILES`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L45}
 */
export const appChangedFiles = process.env.UNI_APP_CHANGED_FILES as OptionalString

/**
 * `process.env.UNI_APP_CHANGED_PAGES`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L46}
 */
export const appChangedPages = process.env.UNI_APP_CHANGED_PAGES as OptionalString

/**
 * `process.env.VUE_APP_DARK_MODE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L47}
 */
export const darkMode = process.env.VUE_APP_DARK_MODE as OptionalBooleanString

/** Detect if `process.env.VUE_APP_DARK_MODE` is set */
export const hasDarkMode = toBoolean(process.env.VUE_APP_DARK_MODE)

/**
 * `process.env.HX_USE_BASE_TYPE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L48}
 */
export type HxUseBaseType = 'standard' | 'custom' | undefined

/**
 * `process.env.HX_USE_BASE_TYPE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L48}
 */
export const hxUseBaseType = process.env.HX_USE_BASE_TYPE as HxUseBaseType

/**
 * `process.env.HX_DEPENDENCIES_DIR`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L49}
 */
export const hxDependenciesDir = process.env.HX_DEPENDENCIES_DIR as OptionalString

/**
 * `process.env.UNI_APP_X`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L55}
 */
export const appX = process.env.UNI_APP_X as OptionalBooleanString

/** Detect if `process.env.UNI_APP_X` is set */
export const isAppX = toBoolean(process.env.UNI_APP_X)

/**
 * `process.env.UNI_APP_X_CACHE_DIR`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L56}
 */
export const appXCacheDir = process.env.UNI_APP_X_CACHE_DIR as OptionalString

/**
 * `process.env.HX_VERSION`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L58}
 */
export const hxVersion = process.env.HX_VERSION as OptionalString

/**
 * `process.env.UNI_APP_X_PAGE_COUNT`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L60}
 */
export const appXPageCount = process.env.UNI_APP_X_PAGE_COUNT as OptionalString

/**
 * `process.env.UNI_APP_X_TSC`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L61}
 */
export const appXTsc = process.env.UNI_APP_X_TSC as OptionalString

/**
 * `process.env.UNI_APP_X_SINGLE_THREAD`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L62}
 */
export const appXSingleThread = process.env.UNI_APP_X_SINGLE_THREAD as OptionalString

/**
 * `process.env.UNI_APP_X_SETUP`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L63}
 */
export const appXSetup = process.env.UNI_APP_X_SETUP as OptionalString

/**
 * `process.env.UNI_APP_X_UVUE_SCRIPT_ENGINE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L64}
 */
export type AppXUVueScriptEngine = 'native' | 'js' | undefined

/**
 * `process.env.UNI_APP_X_UVUE_SCRIPT_ENGINE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L64}
 */
export const appXUVueScriptEngine = process.env.UNI_APP_X_UVUE_SCRIPT_ENGINE as AppXUVueScriptEngine

/**
 * `process.env.UNI_COMPILE_TARGET`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L66}
 */
export type CompileTarget = 'uni_modules' | undefined

/**
 * `process.env.UNI_COMPILE_TARGET`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L66}
 */
export const compileTarget = process.env.UNI_COMPILE_TARGET as CompileTarget

/**
 * `process.env.UNI_COMPILE_CLOUD_DIR`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L67}
 */
export const compileCloudDir = process.env.UNI_COMPILE_CLOUD_DIR as OptionalString

/**
 * `process.env.UNI_MODULES_ENCRYPT_CACHE_DIR`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L68}
 */
export const modulesEncryptCacheDir = process.env.UNI_MODULES_ENCRYPT_CACHE_DIR as OptionalString

/**
 * `process.env.UNI_APP_PACK_TYPE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L70}
 */
export type AppPackType = 'release' | 'debug' | undefined

/**
 * `process.env.UNI_APP_PACK_TYPE`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L70}
 */
export const appPackType = process.env.UNI_APP_PACK_TYPE as AppPackType

/**
 * `process.env.UNI_APP_HARMONY_PROJECT_PATH`
 *
 * @link {https://github.com/dcloudio/uni-app/blob/v3.0.0-4020920240930001/packages/shims-node.d.ts#L72}
 */
export const appHarmonyProjectPath = process.env.UNI_APP_HARMONY_PROJECT_PATH as OptionalString

// Extra
/** `process.env.STAT_TITLE_JSON` */
export const statTitleJson = parseJSON<Record<string, string>>(process.env.STAT_TITLE_JSON)

/** `process.env.SOURCEMAP` */
export const sourcemap = process.env.SOURCEMAP as OptionalBooleanString

/** Detect if `process.env.SOURCEMAP` is set */
export const hasSourcemap = toBoolean(process.env.SOURCEMAP)

/** `process.env.UNI_SSR_CLIENT` */
export const ssrClient = process.env.UNI_SSR_CLIENT as OptionalBooleanString

/** Detect if `process.env.UNI_SSR_CLIENT` is set  */
export const isSSRClient = toBoolean(process.env.UNI_SSR_CLIENT)

/** `process.env.UNI_SSR_SERVER` */
export const ssrServer = process.env.UNI_SSR_SERVER as OptionalBooleanString

/** Detect if `process.env.UNI_SSR_SERVER` is set  */
export const isSSRServer = toBoolean(process.env.UNI_SSR_SERVER)
