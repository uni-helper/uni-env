import { env } from 'std-env'

/** Value of `process.env.UNI_COMPILER` */
export const compiler = env.UNI_COMPILER as "vue" | "nvue";

/** Value of `process.env.UNI_NVUE_COMPILER` */
export const nvueCompiler = env.UNI_NVUE_COMPILER as
  | "uni-app"
  | "vue"
  | undefined;

/** Value of `process.env.UNI_NVUE_STYLE_COMPILER` */
export const nvueStyleCompiler = env.UNI_NVUE_STYLE_COMPILER as
  | "uni-app"
  | undefined;

/** Value of `process.env.UNI_COMPILER_VERSION` */
export const compilerVersion = env.UNI_COMPILER_VERSION as string;

/** Value of `process.env.UNI_COMPILER_VERSION_TYPE` */
export const compilerVersionType = env.UNI_COMPILER_VERSION_TYPE as
  | "a"
  | "r";
