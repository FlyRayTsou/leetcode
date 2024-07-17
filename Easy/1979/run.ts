/*
 * Runtime 63 ms Beats 40.00%
 * Memory 52.00 MB Beats 15.71%
 */
function findGCD(nums: number[]): number {
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return gcd(min, max)
};

function gcd(min: number, max: number) {
    let result = 1;
    for (let i = min; i >= 1; i--) {
        if (Number.isInteger(min/i) && Number.isInteger(max/i)) {
            result = i;
            break;
        }
    }
    return result
}