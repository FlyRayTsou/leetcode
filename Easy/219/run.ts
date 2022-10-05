// Runtime: 175 ms, faster than 64.43% of TypeScript online submissions for Contains Duplicate II.
// Memory Usage: 64.7 MB, less than 26.48% of TypeScript online submissions for Contains Duplicate II.
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hashMap = new Map();
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        if (! hashMap.has(nums[i])) {
            hashMap.set(nums[i], i);
            continue;
        }
        if ((i - hashMap.get(nums[i])) <= k ) {
            result = true;
            break;
        }
        hashMap.set(nums[i], i);
    }
    return result;
};