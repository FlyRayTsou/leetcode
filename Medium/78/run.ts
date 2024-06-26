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


// Runtime: 96 ms, faster than 67.99% of TypeScript online submissions for Subsets.
// Memory Usage: 44.7 MB, less than 92.99% of TypeScript online submissions for Subsets.
function subsets2(nums: number[]): number[][] {
    let result = [];
    let index = 0;
    dfs2(index, false, nums, result, [])
    dfs2(index, true, nums, result, []);
    return result;
};

function dfs2(index: number, isAdd: boolean, nums: number[], result, curResult: number[]) {
    if (isAdd) {
        curResult.push(nums[index]);
    }
    if (index === nums.length-1) {
        result.push(curResult);
        return;
    }
    dfs2(index+1, false, nums, result, [...curResult])
    dfs2(index+1, true, nums, result, [...curResult]);
}

/*
 * Runtime: 78 ms Beats 9.61% of users with TypeScript 
 * Memory: 54.06 MB Beats 13.02% of users with TypeScript
 */
function subsets3(nums: number[]): number[][] {
    let result: number[][] = []
    getSubset3(nums, result, 0, [])
    return result;
};

function getSubset3(nums: number[], result, currentIndex: number, currentSubset: number[]) {
    if (currentIndex === nums.length) {
        result.push(currentSubset)
        return
    }
    getSubset3(nums, result, currentIndex+1, [...currentSubset])
    currentSubset.push(nums[currentIndex])
    getSubset3(nums, result, currentIndex+1, [...currentSubset])
}