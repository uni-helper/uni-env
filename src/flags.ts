import { env } from 'std-env'
import { toBoolean } from './_utils'

/** Detect if `VUE_APP_DARK_MODE` environment variable is set */
export const hasDarkMode = toBoolean(env.VUE_APP_DARK_MODE)

/** Detect if `SOURCEMAP` environment variable is set */
export const hasSourcemap = toBoolean(env.SOURCEMAP)

/** Detect if `UNI_MP_PLUGIN` environment variable is set */
export const isMpPlugin = toBoolean(env.UNI_MP_PLUGIN)
/** Detect if `UNI_MINIMIZE` environment variable is set */
export const isMinimize = toBoolean(env.UNI_MINIMIZE)

/** Detect if `UNI_SSR_CLIENT` environment variable is set  */
export const isSSRClient = toBoolean(env.UNI_SSR_CLIENT)

/** Detect if `UNI_SSR_SERVER` environment variable is set  */
export const isSSRServer = toBoolean(env.UNI_SSR_SERVER)
