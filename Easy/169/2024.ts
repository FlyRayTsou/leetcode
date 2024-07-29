/*
 * Runtime 66 ms Beats 55.33%
 * Memory 54.23 MB Beats 39.49%
 * TC: O(N)
 * SC: O(N)
 */
function majorityElement(nums: number[]): number {
    const numsLenHalf = nums.length/2;
    const hashMap: Map<number, number> = new Map<number, number>();
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const curCount = hashMap.get(nums[i]);
        const nextCount = curCount === undefined ? 1 : curCount+1;
        hashMap.set(nums[i], nextCount);
        if (nextCount >= numsLenHalf) {
            result = nums[i];
            break;
        }
    }
    return result;
};


/*
 * Ref: https://leetcode.com/problems/majority-element/solutions/1787619/c-multiple-approaches-hashmaps-sorting-votingalgo/
 * TC: O(N)
 * SC: O(1)
 */
function majorityElement2(nums: number[]): number {
    let count = 0;
    let majority = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i]
        }
        if (majority === nums[i]) {
            count++
        } else {
            count--;
        }
    }
    return majority
};