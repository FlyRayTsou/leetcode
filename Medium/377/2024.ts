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