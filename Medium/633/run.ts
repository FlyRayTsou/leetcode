/*
 * Runtime 86 ms Beats 14.82% 
 * Memory 51.54 MB Beats 65.74%
 */

function judgeSquareSum(c: number): boolean {
    let result = false;
    const sqareRoot = Math.sqrt(c);
    let left = 0;
    let right = Math.floor(sqareRoot);
    while (left <= right) {
        if (left*left + right*right > c) {
            right--
        } else if (left*left + right*right < c) {
            left++
        } else {
            result = true;
            break;
        }
    }
    return result;
};