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

// Runtime: 91 ms, faster than 85.47% of TypeScript online submissions for Majority Element.
// Memory Usage: 46.5 MB, less than 23.72% of TypeScript online submissions for Majority Element.
function majorityElement2(nums: number[]): number {
    if (nums.length < 3) return nums[0];
    nums.sort((a,b) => {
        return a-b > 0 ? 1 : -1;
    })
    let startIndex = 0;
    let endIndex = 0;
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            endIndex++;
        } else {
            startIndex = i;
            endIndex = i;
        }
        if ((endIndex-startIndex+1) > nums.length/2) {
            result = nums[i];
        }
    }
    return result;
};