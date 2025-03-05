/*
 * Runtime 0 ms Beats 100.00%
 * Memory 55.25 MB Beats 12.83%
 */
function tribonacci(n: number): number {
    const triMemo = [0, 1, 1]
    if (n < 3) return triMemo[n];
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = triMemo[0] + triMemo[1] + triMemo[2]
        triMemo[0] = triMemo[1]
        triMemo[1] = triMemo[2]
        triMemo[2] = result
    }
    return result
};
