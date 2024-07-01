/*
 * Runtime 60 ms Beats 92.50% 
 * Memory 52.33 MB Beats 82.62%
 */
function pivotIndex(nums: number[]): number {
    let rightSum: number = 0;
    let leftSum: number = 0
    let pivotIndex: number = -1;
    for (let i = 0; i < nums.length; i++) {
      rightSum += nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0) {
          leftSum += nums[i-1];
      }
      rightSum -= nums[i];
      if (leftSum === rightSum) {
          pivotIndex = i;
          break;
      }
    }
    return pivotIndex;
};

// 15mins
// clarifiy requirement
//   empty array ? -> not such case
//   not pivot index can achieve -> -1
//   index on the 0 and end -> the sum of value would be 0
// thinking solution
//   calculate the value -> sum
//   for i to end
//   -> i mean the index of pivot
//   -> leftSum = leftSum + nums[i-1]
//   -> rightSum = rightSum - nums[i]
//   -> if same return index
// Complexity
//   TC: O(n)
//   SC: O(1)
// Dry Run
// Input: nums = [1,7,3,6,5,6]
// rightSum = 1+7+3+6+5+6 = 28
// leftSum = 0
// i = 0
//   leftSum = 0
//   rightSum = 27
// i = 1
//   leftSum = 1
//   rightSum = 20
// i = 2
//   leftSum = 8
//   rightSum = 17
// i = 3
//   leftSum = 11
//   rightSum = 11
// nums = [1,-1, 2]
// rightSum = 2
// i = 0
//   leftSum = 0
//   rightSum = 1
// i = 1
//   leftSum = 1
//   rightSum = 2
// i = 2
//   leftSum = 0
//   rightSum = 0