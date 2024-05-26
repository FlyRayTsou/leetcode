/*
 * Runtime: 171 ms Beats 27.98% of users with TypeScript
 * Memory: 58.24 MB Beats 33.68% of users with TypeScript
 */
function permuteUnique(nums: number[]): number[][] {
    let result = [];
    let setIndice = new Map();
    let hashMap = new Map();
    generateResult(nums, setIndice, [], result, hashMap);
    return result;
}

function generateResult(nums: number[], setIndice: Map<number, boolean>, curResult: number[], result: number[][], hashMap: Map<String, Boolean>) {
    if (nums.length === setIndice.size) {
        if (! hashMap.has([...curResult].toString())) {
            hashMap.set([...curResult].toString(), true)
            result.push([...curResult]);
        }
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (setIndice.has(i)) continue;
        setIndice.set(i, true);
        curResult.push(nums[i])
        generateResult(nums, setIndice, curResult, result, hashMap)
        curResult.pop();
        setIndice.delete(i);
    }
}