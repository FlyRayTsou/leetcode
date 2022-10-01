// Runtime: 139 ms, faster than 22.01% of TypeScript online submissions for Majority Element.
// Memory Usage: 46.3 MB, less than 30.98% of TypeScript online submissions for Majority Element.
function majorityElement(nums: number[]): number {
    const size = nums.length;
    const hashTable:number[] = [];
    let result = 0;
    for (let i = 0; i < size; i++) {
        if (hashTable[nums[i]] === undefined) {
            hashTable[nums[i]] = 1;
        } else {
            hashTable[nums[i]]++;
        }
        if (hashTable[nums[i]] > size/2) {
            result = nums[i];
            break;
        }
    }
    return result
};