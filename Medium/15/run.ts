// Runtime: 171 ms, faster than 89.56% of TypeScript online submissions for 3Sum.
// Memory Usage: 54.4 MB, less than 37.76% of TypeScript online submissions for 3Sum.
function threeSum(nums: number[]): number[][] {
    let target:number = 0;
    let result:number[][] = [];
    nums.sort((a, b) => a-b);
    console.log(nums);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > target) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let second = i+1;
        let third = nums.length - 1;
        
        while (second < third) {
            const sum = nums[i] + nums[second] + nums[third];
            if (sum === target) {
                result.push([nums[i], nums[second], nums[third]]);
                while (nums[second] === nums[second+1]) second++;
                while (nums[third] === nums[third-1]) third--;
                second++;
                third--
            }
            if (sum > target) {
                third--;
            }
            if (sum < target) {
                second++;
            }
        }
    }
    return result;
};