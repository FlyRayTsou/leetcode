/**
 Do not return anything, modify nums in-place instead.
 */
/*
 * Runtime 77 ms Beats 73.75%
 * Memory 56.14 MB Beats 13.10%
 */
 function moveZeroes(nums: number[]): void {
    const memoryNums: number[] = [];
    // operation: N
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            memoryNums.push(nums[i])
        }
    }
    // operation: N
    for (let i = 0; i < nums.length; i++) {
        if (memoryNums[i] !== undefined) {
            nums[i] = memoryNums[i]
        } else {
            nums[i] = 0
        }
    }
};