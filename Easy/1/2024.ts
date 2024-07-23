/*
 * Runtime 177 ms Beats 9.40%
 * Memory 52.47 MB Beats 48.69%
 */
function twoSum(nums: number[], target: number): number[] {
    const result: number[] = []
    let isFind: boolean = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j == i) continue
            if (nums[i]+nums[j]===target) {
                result.push(i)
                result.push(j)
                isFind = true;
                break;
            }
        }
        if (isFind) {
            break;
        }
    }
    return result;
};

/*
 * Runtime 60 ms Beats 81.89%
 * Memory 53.19 MB Beats 19.23%
 */
function twoSum2(nums: number[], target: number): number[] {
    const result: number[] = []
    const hashMap: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        const complementIndex = hashMap.get(target-nums[i])
        if (complementIndex !== undefined && complementIndex !== i) {
            result.push(i, complementIndex)
            break
        }
    }
    return result
};