import type { builtInPlatforms } from './_constant'

export type BuiltInPlatForm = typeof builtInPlatforms[number]

export type UtsPlatform = BuiltInPlatForm
  | 'app-android'
  | 'app-ios'
  | 'web'
export type AppPlatform = 'android'
  | 'ios'
  | undefined
export type SubPlatform =
  'quickapp-webview-huawei'
  | 'quickapp-webview-union'
  | undefined
