/*
 * Iterative + 2 variables (bottom-up)
 * Time complexity: O()
 */
function rob(nums: number[]): number {
    let previous2 = 0; // i-2
    let previous1 = 0; // i-1
    for (let i = 0; i < nums.length; i++) {
        let tmp = previous1
        previous1 = Math.max(previous2+nums[i], previous1);
        previous2 = tmp;
    }
    return previous1;
};