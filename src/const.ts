import { env } from 'std-env'
import { parseJSON } from './_utils'

/** Value of `process.env.UNI_CLI_CONTEXT` */
export const cliContext = env.UNI_CLI_CONTEXT as string

/** Value of `process.env.UNI_INPUT_DIR` */
export const inputDir = env.UNI_INPUT_DIR as string

/** Value of `process.env.UNI_OUTPUT_DIR` */
export const outputDir = env.UNI_OUTPUT_DIR as string

/** Value of `process.env.STAT_TITLE_JSON` */
export const statTitleJson = parseJSON<Record<string, string>>(
  env.STAT_TITLE_JSON,
)

/** Value of `process.env.UNI_CUSTOM_CONTEXT` */
export const customContext = env.UNI_CUSTOM_CONTEXT

/** Value of `process.env.UNI_CUSTOM_SCRIPT` */
export const customScript = env.UNI_CUSTOM_SCRIPT

/** Value of `process.env.UNI_CUSTOM_DEFINE` */
export const customDefine = env.UNI_CUSTOM_DEFINE

/** Value of `process.env.UNI_SUBPACKAGE` */
export const subpackage = env.UNI_SUBPACKAGE
/** Value of `process.env.UNI_RENDERER` */
export const renderer = env.UNI_RENDERER as 'native' | undefined

/** Value of `process.env.UNI_RENDERER_NATIVE` */
export const rendererNative = env.UNI_RENDERER_NATIVE as
  | 'appService'
  | 'pages'
  | undefined
