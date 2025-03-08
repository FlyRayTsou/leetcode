/*
 * Runtime 46 ms Beats 87.35%
 * Memory 55.99 MB Beats 7.83%
 */
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const result: number[] = [];
    for(let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) result.push(arr[i])
    }
    return result;
};