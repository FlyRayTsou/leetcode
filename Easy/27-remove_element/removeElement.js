/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    while(true) {
        const index = nums.indexOf(val);
        if (index > -1) {
          nums.splice(index, 1);
          continue;
        }
        break;
    }
    return nums.length;
};