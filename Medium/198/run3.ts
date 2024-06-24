/*
 * Recursive (top-down)
 * Time complexity: O()
 * Runtime 55 ms Beats 66.59%
 * Memory 50.36 MB Beats 53.61%
 */
function rob(nums: number[]): number {
    const memo: number[] = new Array(nums.length).fill(-1)
    memo[-2] = 0
    memo[-1] = 0
    dp(nums, nums.length - 1, memo)
    return memo[nums.length - 1]
};

function dp(nums: number[], index: number, memo: number[]): number {
    if (memo[index] !== -1) {
        return memo[index]
    }
    if (memo[index] === -1 && index >= 0) {
        memo[index] = Math.max(dp(nums, index-2, memo)+nums[index], dp(nums, index-1, memo));
    }
    return memo[index] 
}