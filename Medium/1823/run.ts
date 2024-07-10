/*
 * Runtime 137 ms Beats 15.99% Analyze Complexity O(N^2)
 * Memory 52.54 MB Beats 23.42%
 */
function findTheWinner(n: number, k: number): number {
    if (n===1) return 1;
    let isContinue = true;
    let counter = 0;
    let isRemoved = new Map();
    let result = 0;
    while (isContinue) {
        for (let i = 1; i <= n; i++) {
            if (isRemoved.has(i)) continue;
            counter++
            if (counter === k) {
                isRemoved.set(i, true)
                counter = 0;
            }
            if (isRemoved.size === n-1) {
                isContinue = false;
                break;
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        if (isRemoved.has(i) === false) {
            result = i;
            break;
        }
    }
    return result;
};