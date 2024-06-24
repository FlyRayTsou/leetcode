/*
 * Iterative + memo (bottom-up)
 * Time complexity: O()
 */
function rob(nums: number[]): number {
    const dp: number[] = new Array(nums.length).fill(-1)
    dp[-2] = 0
    dp[-1] = 0
    for (let i = 0; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1]);
    }
    return dp[nums.length - 1]
};