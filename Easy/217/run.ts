// Runtime: 98 ms, faster than 91.12% of TypeScript online submissions for Contains Duplicate.
// Memory Usage: 51.1 MB, less than 59.71% of TypeScript online submissions for Contains Duplicate.
function containsDuplicate(nums: number[]): boolean {
    let hashMap = new Map();
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.get(nums[i]) === undefined) {
            hashMap.set(nums[i], true);
        } else {
            result = true;
            break;
        }
    }
    return result;
};