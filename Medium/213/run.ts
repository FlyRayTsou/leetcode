/*
 * Runtime 63 ms Beats 25.87%
 * Memory 51.41 MB Beats 33.83%
 */
function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    let previous2 = 0; // i-2
    let previous1 = 0; // i-1
    for (let i = 0; i < nums.length-1; i++) {
        let tmp = previous1
        previous1 = Math.max(previous2+nums[i], previous1);
        previous2 = tmp;
    }
    const case1 = previous1;
    previous2 = 0; // i-2
    previous1 = 0; // i-1
    for (let i = 1; i < nums.length; i++) {
        let tmp = previous1
        previous1 = Math.max(previous2+nums[i], previous1);
        previous2 = tmp;
    }
    const case2 = previous1
    return Math.max(case1, case2)
};