/*
 * Runtime 78 ms Beats 77.59%
 * Memory 65.87 MB Beats 10.28%
 */
function containsDuplicate(nums: number[]): boolean {
    const hashMap: Map<number, boolean> = new Map<number, boolean>();
    let result: boolean = false;
    for (let i = 0; i < nums.length; i++) {
        const storageValue = hashMap.get(nums[i]);
        if (storageValue === undefined) {
            hashMap.set(nums[i], true);
            continue;
        }
        result = true;
        break;
    }
    return result;
};