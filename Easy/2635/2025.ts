/*
 * Runtime 51 ms Beats 70.88%
 * Memory 55.82 MB Beats 9.23%
 */
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];
    for (let k = 0; k < arr.length; k++) {
        result.push(fn(arr[k], k));
    }
    return result;
};