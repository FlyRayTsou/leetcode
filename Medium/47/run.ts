/*
 * Runtime: 176 ms Beats 26.43% of users with TypeScript
 * Memory: 58.29 MB Beats 33.68% of users with TypeScript
 */
function permuteUnique(nums: number[]): number[][] {
    let setPer: Set<String> = new Set();
    let setIndice = new Map();
    generateResult(nums, setIndice, [], setPer);
    let arrayPer = Array.from(setPer)
    let splitPer = Array.from(arrayPer, x => x.split(","))
    const rows = splitPer.length;
    const columns = splitPer[0].length;
    let result = Array.from(Array(rows), () => new Array(columns).fill(0));
    for (let i = 0; i < splitPer.length; i++) {
        for (let j =0; j < splitPer[i].length; j++) {
            result[i][j] = parseInt(splitPer[i][j])
        }
    }
    return result;
}

function generateResult(nums: number[], setIndice: Map<number, boolean>, curResult: number[], result: Set<String>) {
    if (nums.length === setIndice.size) {
        result.add(curResult.toString());
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
