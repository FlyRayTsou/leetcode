/*
 * Time Limit Exceeded
 * 9 / 16 testcases passed
 */
function combinationSum4(nums: number[], target: number): number {
    return findEqualToSum(0, target, nums);
};

function findEqualToSum(curSum: number, target: number, nums: number[]) {
    if (curSum > target) {
        return 0;
    }
    if (curSum === target) {
        return 1;
    }
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += findEqualToSum(curSum+nums[i], target, nums);
    }
    return count;
}


/*
 * Reference: https://www.youtube.com/watch?v=dw2nMCxG0ik
 * Runtime 53 ms Beats 91.04%
 * Memory 51.27 MB Beats 85.07%
 */
function combinationSum4(nums: number[], target: number): number {
    const cache: Map<number, number> = new Map<number, number>();
    return findEqualToSum(0, target, nums, cache);
};

function findEqualToSum(curSum: number, target: number, nums: number[], cache: Map<number, number>) {
    if (curSum > target) {
        return 0;
    }
    if (curSum === target) {
        return 1;
    }
    const cacheResult = cache.get(target-curSum);
    if (cacheResult !== undefined) {
        return cacheResult;
    }
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += findEqualToSum(curSum+nums[i], target, nums, cache);
    }
    cache.set(target-curSum, count);
    return count;
}