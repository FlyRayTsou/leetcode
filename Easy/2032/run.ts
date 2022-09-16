// Runtime: 133 ms, faster than 30.00% of TypeScript online submissions for Two Out of Three.
// Memory Usage: 45.5 MB, less than 75.00% of TypeScript online submissions for Two Out of Three.
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let hashMap = new Map();
    let result = new Set<number>();
    for (let i = 0; i < nums1.length; i++) {
        if(!hashMap.has(nums1[i])) {
            hashMap.set(nums1[i], 1);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if(hashMap.has(nums2[i]) && hashMap.get(nums2[i]) === 1) {
            hashMap.set(nums2[i], 11);
            result.add(nums2[i]);
        } else {
            hashMap.set(nums2[i], 2);
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        if (hashMap.has(nums3[i]) && (hashMap.get(nums3[i]) === 1 || hashMap.get(nums3[i]) === 2)) {
            hashMap.set(nums3[i], 11);
            result.add(nums3[i]);
        }
    }
    const resultArray: number[] = Array.from(result);
    return resultArray
};