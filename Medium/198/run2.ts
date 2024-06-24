/*
 * Recursive (top-down)
 * Time complexity: O()
 * Time Limit Exceeded
 * 55 / 70 testcases passed
 */
function rob(nums: number[]): number {
    return dp(nums, nums.length - 1)
};

function dp(nums: number[], index: number) {
    if (index < 0) {
        return 0;
    }
    return Math.max(dp(nums, index-2)+nums[index], dp(nums, index-1));
}