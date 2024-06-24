/*
 * Iterative + 2 variables (bottom-up)
 * Time complexity: O()
 * Runtime 44 ms Beats 97.96%
 * Memory 49.89 MB Beats 88.58%
 */
function rob(nums: number[]): number {
    let previous2 = 0; // i-2
    let previous1 = 0; // i-1
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = Math.max(previous2+nums[i], previous1);
        previous2 = previous1;
        previous1 = result;
    }
    return result;
};