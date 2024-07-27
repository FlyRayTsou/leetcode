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


/*
 * Ref: https://leetcode.com/problems/contains-duplicate-ii/solutions/3863824/sliding-window-o-n-time-o-1-space/
 * Set
 * Runtime 89 ms Beats 76.69%
 * Memory 61.51 MB Beats 77.42%
 */
function containsNearbyDuplicate2(nums: number[], k: number): boolean {
    const hashSet: Set<number> = new Set<number>();
    let result: boolean = false;
    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            result = true;
            break;
        }
        hashSet.add(nums[i])
        if (hashSet.size > k) {
            hashSet.delete(nums[i-k])
        }
    }
    return result;
};
