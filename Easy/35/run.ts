function searchInsert(nums: number[], target: number): number {
    return findInsertPosition(0, nums.length-1, nums, target);
};

function findInsertPosition(low: number, high: number, nums: number[], target: number) {
    if (low > high) return low;
    const middle = Math.trunc((low+high)/2);
    if (target === nums[middle]) return middle;
    if (target > nums[middle]) return findInsertPosition(middle+1, high, nums, target);
    if (target < nums[middle]) return findInsertPosition(low, middle-1, nums, target);
}