/*
 * Ref: https://leetcode.com/problems/maximum-average-subarray-i/solutions/3666009/easy-to-understand-typescript-solution-90ms-runtime-sliding-window-technique/?envType=study-plan-v2&envId=leetcode-75
 */
function findMaxAverage(nums: number[], k: number): number {
    let total: number = 0;
    for (let i = 0 ; i < k; i++) {
        total += nums[i]
    }
    let maxAverage = total/k;
    for (let j = k; j < nums.length; j++) {
        total += nums[j] - nums[j-k]
        maxAverage = Math.max(maxAverage, total/k)
    }
    return maxAverage
};