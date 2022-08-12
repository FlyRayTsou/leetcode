function searchInsert(nums: number[], target: number): number {
    const targetIndex = findInsertPosition(0, nums.length, nums, target);
    if (nums[targetIndex] === undefined || nums[targetIndex] === target || nums[targetIndex] > target) return targetIndex;
    if (nums[targetIndex] < target) return targetIndex+1;
};

function findInsertPosition(low: number, high: number, nums: number[], target: number) {
    if (low > high) return low;
    const middle = Math.trunc((low+high)/2);
    if (nums[middle] === undefined) return high;
    if (target === nums[middle]) return middle;
    if (target > nums[middle]) return findInsertPosition(middle+1, high, nums, target);
    if (target < nums[middle]) return findInsertPosition(low, middle-1, nums, target);
}