// Step1 clarify requirement
// [55,1,1,100] -> rob 1 and 4
// Step2 Solution
// 1. previous take + not take current
// 2. previous no take + take current
// 3. previous no take + not take current
// math.max(dp(yes, no), dp(), dp())
// Step3 TC and MC
// TC: O(n^3)
// MC: O(n) call stack
/*
 * Time Limit Exceeded
 * 48 / 70 testcases passed
 */
function rob(nums: number[]): number {
    return Math.max(dp(false, true, 0, 0, nums), dp(false, false, 0, 0, nums));
};

function dp(previousState: boolean, currentState: boolean, currentIndex: number, currentAmount: number, nums: number[]) {
    if (currentIndex === nums.length) {
        return currentAmount;
    }
    if (previousState === false && currentState === true) {
        currentAmount += nums[currentIndex]
    }
    return Math.max(dp(currentState, false, currentIndex+1, currentAmount, nums), dp(currentState, true, currentIndex+1, currentAmount, nums))
}