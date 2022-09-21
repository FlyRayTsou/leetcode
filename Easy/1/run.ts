// Runtime: 205 ms, faster than 23.61% of TypeScript online submissions for Two Sum.
// Memory Usage: 45.7 MB, less than 19.55% of TypeScript online submissions for Two Sum.
function twoSum(nums: number[], target: number): number[] {
    let diffSum: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        diffSum[i] = target-nums[i];
        const findPair = diffSum.indexOf(nums[i]);
        if (findPair !== -1 && findPair !== i) {
            return [findPair, i];
        }
    }
};