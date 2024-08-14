/*
 * Runtime 60 ms Beats 93.77%
 * Memory 54.74 MB Beats 35.53%
 */
function buildArray(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]]
    }
    return result;
};