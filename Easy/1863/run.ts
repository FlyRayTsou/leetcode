/*
 * Runtime: 64 ms Beats 71.43% of users with TypeScript
 * Memory: 50.09 MB Beats 76.19% of users with TypeScript
 */
function subsetXORSum(nums: number[]): number {
    let result = 0
    result = calculate(true, 0, nums, 0) + calculate(false, 0, nums, 0)
    return result
};

function calculate(choose: boolean, currentIndex: number, nums: number[], currentResult: number) {
    if (choose) {
        currentResult = currentResult ^ nums[currentIndex]
    }
    if (currentIndex === nums.length-1) {
        return currentResult
    }

    currentIndex++
    return calculate(true, currentIndex, nums, currentResult) + calculate(false, currentIndex, nums, currentResult)
}