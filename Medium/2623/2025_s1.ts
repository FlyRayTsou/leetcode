type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const hashMap: Map<string, number> = new Map<string, number>();
    return function(...args) {
        if (hashMap.has(`${args.toString()}`)) {
            return hashMap.get(`${args.toString()}`);
        }
        const calculateResult = fn(...args);
        hashMap.set(`${args.toString()}`, calculateResult);
        return calculateResult;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */