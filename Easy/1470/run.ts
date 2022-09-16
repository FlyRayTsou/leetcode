// Runtime: 148 ms, faster than 9.45% of TypeScript online submissions for Shuffle the Array.
// Memory Usage: 45 MB, less than 53.54% of TypeScript online submissions for Shuffle the Array.
function shuffle(nums: number[], n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < n; i++) {
        result[2*i] = nums[i];
        result[2*i+1] = nums[n+i];
    }
    return result;
};


// Runtime: 123 ms, faster than 37.80% of TypeScript online submissions for Shuffle the Array.
// Memory Usage: 44.4 MB, less than 94.49% of TypeScript online submissions for Shuffle the Array.
function shuffle2(nums: number[], n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n+i]);
    }
    return result;
};