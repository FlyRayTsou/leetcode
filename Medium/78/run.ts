// Runtime: 138 ms, faster than 7.93% of TypeScript online submissions for Subsets.
// Memory Usage: 45.5 MB, less than 21.04% of TypeScript online submissions for Subsets.
function subsets(nums: number[]): number[][] {
    let result = [];
    let index = 0;
    dfs(index, false, nums, result, [])+dfs(index, true, nums, result, []);
    return result;
};

function dfs(index: number, isAdd: boolean, nums: number[], result, curResult: number[]) {
    if (isAdd) {
        curResult.push(nums[index]);
    }
    if (index === nums.length-1) {
        result.push(curResult);
        return;
    }
    return dfs(index+1, false, nums, result, [...curResult]) + dfs(index+1, true, nums, result, [...curResult]);
}
