// brutal force, nums.length -> n
// find the largest index i -> n
// find the second largest index j -> n
// TC O(N) SC(1)


function maxProduct(nums: number[]): number {
    const firstMaxIndex = findMax(nums);
    const firstMax = nums[firstMaxIndex];
    nums[firstMaxIndex] = 0
    const secondMaxIndex = findMax(nums);
    
    return (firstMax-1) * (nums[secondMaxIndex]-1);
};

function findMax(nums: number[]): number {
    let currentMax = 0;
    let currentMaxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentMax) {
            currentMax = nums[i];
            currentMaxIndex = i;
        }
    }
    return currentMaxIndex;
}