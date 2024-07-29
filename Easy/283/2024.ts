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



/**
 Do not return anything, modify nums in-place instead.
 */
/*
 * Runtime 83 ms Beats 51.45%
 * Memory 54.72 MB Beats 85.58%
 */
 function moveZeroes2(nums: number[]): void {
    let curZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        while(curZeroIndex < nums.length && nums[curZeroIndex] !== 0) {
            curZeroIndex++;
        }
        if (nums[i] !== 0 && i > curZeroIndex) {
            [nums[i], nums[curZeroIndex]] = [nums[curZeroIndex], nums[i]];
            curZeroIndex++;
        }
    }
};

/*
 * Reference
 * two pointer: https://leetcode.com/problems/move-zeroes/solutions/562911/two-pointers-technique-python-o-n-time-o-1-space/
 * scan and insert: https://leetcode.com/problems/move-zeroes/solutions/72011/simple-o-n-java-solution-using-insert-index/
 * snowball: https://leetcode.com/problems/move-zeroes/solutions/172432/the-easiest-but-unusual-snowball-java-solution-beats-100-o-n-clear-explanation/
 */