/*
 * Runtime 101 ms Beats 51.81%
 * Memory 71.05 MB Beats 33.09%
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hashMap: Map<number, number> = new Map<number, number>();
    let result: boolean = false;
    for (let i = 0; i < nums.length; i++) {
        const storageIndex = hashMap.get(nums[i]);
        if (storageIndex === undefined) {
            hashMap.set(nums[i], i);
            continue;
        }
        if (Math.abs(storageIndex-i) <= k) {
            result = true;
            break;
        } 
        hashMap.set(nums[i], i)
    }
    return result;
};