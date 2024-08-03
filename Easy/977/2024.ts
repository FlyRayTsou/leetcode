/*
 * Runtime 98 ms Beats 28.66%
 * Memory 56.48 MB Beats 93.95%
 */
function sortedSquares(nums: number[]): number[] {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums.sort((a,b) => { return a-b })
};

/*
 * Runtime 85 ms Beats 72.31%
 * Memory 57.18 MB Beats 54.90%
 */
function sortedSquares2(nums: number[]): number[] {
    let positiveIndex: number | undefined;
    const squaresNums: number[] = [];
    let result: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && positiveIndex === undefined) {
            positiveIndex = i;
        }
        squaresNums[i] = nums[i] * nums[i]
    }
    if (positiveIndex === undefined) return squaresNums.reverse();
    if (positiveIndex === 0) return squaresNums;
    let right = positiveIndex;
    let left = positiveIndex-1;
    while(left >= 0 || right < squaresNums.length) {
        if (squaresNums[right] >= squaresNums[left]) {
            if (left >= 0) {
                result.push(squaresNums[left])
                left--;
            } else {
                result = result.concat(squaresNums.slice(right))
                break;
            }
        } else {
            if (right < squaresNums.length) {
                result.push(squaresNums[right])
                right++
            } else {
                result =  result.concat(squaresNums.slice(0, left+1).reverse())
                break;
            }
        }
    }
    return result;
};

/*
 * Reference: https://leetcode.com/problems/squares-of-a-sorted-array/
 * Runtime 84 ms Beats 76.06%
 * Memory 57.65 MB Beats 18.74%
 */
function sortedSquares3(nums: number[]): number[] {
    const len: number = nums.length;
    let left: number = 0;
    let right: number = len-1;
    const result: number[] = []
    for (let i = len-1; i >= 0; i--) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    return result;
};