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


// Runtime: 128 ms, faster than 54.55% of TypeScript online submissions for Two Sum.
// Memory Usage: 45.9 MB, less than 13.38% of TypeScript online submissions for Two Sum.
function twoSum2(nums: number[], target: number): number[] {
    let diffMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (diffMap.has(nums[i])) {
            return [diffMap.get(nums[i]), i];
        }
        diffMap.set(target-nums[i], i);
    }
};