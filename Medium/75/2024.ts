/**
 Do not return anything, modify nums in-place instead.
 */
/*
 * Runtime 54 ms Beats 77.88%
 * Memory 51.34 MB Beats 56.19%
 */
 function sortColors(nums: number[]): void {
    let [red, white, blue]: number[] = [0, 0, 0];
    for (let i = 0; i < nums.length; i++) {
        switch(nums[i]) {
            case 0:
                red++;
                break;
            case 1:
                white++;
                break;
            case 2:
                blue++;
                break;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (red > 0) {
            nums[i] = 0;
            red--
        } else if (white > 0) {
            nums[i] = 1;
            white--;
        } else if (blue > 0) {
            nums[i] = 2;
            blue--;
        }
    }
};


/**
 Do not return anything, modify nums in-place instead.
 */
/*
 * Reference: https://www.youtube.com/watch?v=4xbWSRZHqac
 * Runtime 58 ms Beats 56.97%
 * Memory 51.33 MB Beats 56.19%
 */
 function sortColors2(nums: number[]): void {
    let left: number = 0;
    let right: number = nums.length-1;
    let i: number = 0;
    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            i--;
        }
        i++
    }
};