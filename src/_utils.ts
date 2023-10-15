export function toBoolean(val: boolean | string | undefined) {
  return val ? val !== "false" : false;
}

export function parseJSON<T extends unknown>(val: any) {
  let obj: T;
  try {
    obj = JSON.parse(val || "{}") as T;
  } catch (error) {
    obj = {} as T;
  }
  return obj;
}
