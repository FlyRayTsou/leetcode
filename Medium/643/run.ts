/* 12mins
// clarify requirement
//     k = 0
//     empty array
//     
// solution thinking
//      n = 5
//      k = 2
//      [0,1], [1,2], [2,3], [3,4]
//      5-2+1 = 4
//      -original first +new -> average
//      Math.max(original, new)
// complexity
// TC: O(n)
// SC: O(1)
*/ 
/*
 * Runtime 84 ms Beats 69.64%
 * Memory 64.25 MB Beats 29.80%
 */
function findMaxAverage(nums: number[], k: number): number {
    let maxAverage: number = -Infinity;
    let total: number = 0;
    for (let i = 0 ; i < k; i++) {
        total += nums[i]
    }
    maxAverage = total/k;
    let firstIndex: number = 0;
    for (let j = k; j < nums.length; j++) {
        total -= nums[firstIndex]
        total += nums[j]
        maxAverage = Math.max(maxAverage, total/k)
        firstIndex++;
    }
    return maxAverage
};