function missingNumber(nums: number[]): number {
    let result:number = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i] ^ i;
    }
    return result ^ nums.length;
};