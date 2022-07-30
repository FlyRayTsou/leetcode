function singleNumber(nums: number[]): number {
    return nums.reduce(function(acc, curVal) {
        return acc ^ curVal;
    }, 0)
};