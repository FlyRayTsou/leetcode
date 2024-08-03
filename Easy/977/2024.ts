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