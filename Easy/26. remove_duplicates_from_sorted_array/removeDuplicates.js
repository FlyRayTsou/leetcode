
/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 130 ms, faster than 41.28% of JavaScript online submissions for Remove Duplicates from Sorted Array.
//  Memory Usage: 45 MB, less than 31.48% of JavaScript online submissions for Remove Duplicates from Sorted Array.
var removeDuplicates = function(nums) {
    let current = 0;
    let pointer = 1;
    while (nums[pointer] !== undefined) {
        if (nums[current] === nums[pointer]) {
            nums.splice(pointer, 1);
        } else {
            current++;
            pointer++
        }        
    }
    return nums.length;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 66 ms, faster than 98.91% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.8 MB, less than 51.37% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// https://bretcameron.medium.com/how-to-make-your-code-faster-using-javascript-sets-b432457a4a77
var removeDuplicates2 = function(nums) {
    uniqueArray = [...new Set(nums)];
    let i = 0;
    while(uniqueArray[i] !== undefined) {
        nums[i] = uniqueArray[i];
        i++;
    }
    return i;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 72 ms, faster than 96.28% of JavaScript online submissions for Remove Duplicates from Sorted Array.
//  Memory Usage: 44.8 MB, less than 51.37% of JavaScript online submissions for Remove Duplicates from Sorted Array.
var removeDuplicates3 = function(nums) {
    uniqueSet = new Set(nums);
    let i = 0;
    for (const value of uniqueSet) {
        nums[i] = value;
        i++;
    }
    return i;
};


