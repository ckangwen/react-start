export function isFunction(val: any): val is Function {
  return typeof val === 'function'
}

/**
 * Returns true if `node` is null/undefined, false, empty string, or an array
 * composed of those. If `node` is an array, only one level of the array is
 * checked, for performance reasons.
 */
export function isReactNodeEmpty(node?: React.ReactNode, skipArray = false): boolean {
  return (
    node == null ||
    node === "" ||
    node === false ||
    (!skipArray &&
      Array.isArray(node) &&
      // only recurse one level through arrays, for performance
      (node.length === 0 || node.every(n => isReactNodeEmpty(n, true))))
  )
}

/**
 * safely invoke the function with the given argument
 * if it is indeed a function, and return its value
 * Otherwise, return undefined
*/
export function safeInvoke<R>(func: (() => R) | undefined): R | undefined
export function safeInvoke<A, R>(func: ((arg1: A) => R) | undefined, arg1: A): R | undefined
export function safeInvoke<A, B, R>(func: ((arg1: A, arg2: B) => R) | undefined, arg1: A, arg2: B): R | undefined
export function safeInvoke<A, B, C, R>(
  func: ((arg1: A, arg2: B, arg3: C) => R) | undefined,
  arg1: A,
  arg2: B,
  arg3: C,
): R | undefined
export function safeInvoke<A, B, C, D, R>(
  func: ((arg1: A, arg2: B, arg3: C, arg4: D) => R) | undefined,
  arg1: A,
  arg2: B,
  arg3: C,
  arg4: D,
): R | undefined

export function safeInvoke(func: Function | undefined, ...args: any[]) {
  if (isFunction(func)) {
    return func(...args)
  }
  return undefined
}