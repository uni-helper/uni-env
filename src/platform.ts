import { env } from 'std-env'
import type { AppPlatform, BuiltInPlatForm, SubPlatform, UtsPlatform } from './types'

export { builtInPlatforms } from './_constant'

/** Value of `process.env.UNI_PLATFORM` */
export const platform = env.UNI_PLATFORM as BuiltInPlatForm

/** Value of `process.env.UNI_UTS_PLATFORM` */
export const utsPlatform = env.UNI_UTS_PLATFORM as UtsPlatform

/** Value of `process.env.UNI_APP_PLATFORM` */
export const appPlatform = env.UNI_APP_PLATFORM as AppPlatform

/** Value of `process.env.UNI_SUB_PLATFORM` */
export const subPlatform = env.UNI_SUB_PLATFORM as SubPlatform

/** Detect if `process.env.UNI_PLATFORM` is `H5` */
export const isH5 = platform === 'h5'

/** Detect if `process.env.UNI_PLATFORM` is `APP` */
export const isApp = platform === 'app'

/** Detect if `process.env.UNI_APP_PLATFORM` is `android` or if `process.env.UNI_UTS_PLATFORM` is "app-android" */
export const isAppAndroid = appPlatform === 'android' || utsPlatform === 'app-android'

/** Detect if `process.env.UNI_APP_PLATFORM` is `ios` or if `process.env.UNI_UTS_PLATFORM` is "app-ios" */
export const isAppIOS = appPlatform === 'ios' || utsPlatform === 'app-ios'

/** Detect if `process.env.UNI_PLATFORM` is `小程序` */
export const isMp = /^mp-/i.test(platform)

/** Detect if `process.env.UNI_PLATFORM` is `微信小程序` */
export const isMpWeixin = platform === 'mp-weixin'

/** Detect if `process.env.UNI_PLATFORM` is `支付宝小程序` */
export const isMpAlipay = platform === 'mp-alipay'

/** Detect if `process.env.UNI_PLATFORM` is `百度小程序` */
export const isMpBaidu = platform === 'mp-baidu'

/** Detect if `process.env.UNI_PLATFORM` is `快手小程序` */
export const isMpKuaishou = platform === 'mp-kuaishou'

/** Detect if `process.env.UNI_PLATFORM` is `QQ小程序` */
export const isMpQQ = platform === 'mp-qq'

/** Detect if `process.env.UNI_PLATFORM` is `头条小程序` */
export const isMpToutiao = platform === 'mp-toutiao'

/** Detect if `process.env.UNI_PLATFORM` is `快应用` */
export const isQuickapp = /^quickapp-webview/i.test(platform)

/** Detect if `process.env.UNI_PLATFORM` is `快应用联盟` */
export const isQuickappUnion = platform === 'quickapp-webview-union'

/** Detect if `process.env.UNI_PLATFORM` is `快应用华为` */
export const isQuickappHuawei = platform === 'quickapp-webview-huawei'
