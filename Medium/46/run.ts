// Runtime: 130 ms, faster than 46.87% of TypeScript online submissions for Permutations.
// Memory Usage: 45.9 MB, less than 64.27% of TypeScript online submissions for Permutations.
function permute(nums: number[]): number[][] {
    let result = [];
    let setIndice = new Map();
    generateResult(nums, setIndice, [], result);
    return result;
}

function generateResult(nums: number[], setIndice: Map<number, boolean>, curResult: number[], result: number[][]) {
    if (nums.length === setIndice.size) {
        result.push([...curResult]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (setIndice.has(i)) continue;
        setIndice.set(i, true);
        curResult.push(nums[i])
        generateResult(nums, setIndice, curResult, result)
        curResult.pop();
        setIndice.delete(i);
    }
}
