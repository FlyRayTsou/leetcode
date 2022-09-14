// Runtime: 166 ms, faster than 5.02% of TypeScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 45 MB, less than 63.07% of TypeScript online submissions for Intersection of Two Arrays II.
function intersect(nums1: number[], nums2: number[]): number[] {
    const length1 = nums1.length;
    const length2 = nums2.length;
    if (length1 > length2) {
        return getIntersection(nums1, nums2);
    }
    return getIntersection(nums2, nums1);
};
    
function getIntersection(bigArray:number[], smallArray:number[]): number[] {
    let result:number[] = [];
    for (let i = 0; i < smallArray.length; i++) {
        let matchIndex = bigArray.findIndex(x => x === smallArray[i]);
        if (matchIndex !== -1) {
            result.push(smallArray[i]);
            bigArray[matchIndex] = -1;
        }
    }
    return result;
}


// Runtime: 94 ms, faster than 75.88% of TypeScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 45 MB, less than 55.28% of TypeScript online submissions for Intersection of Two Arrays II.
function intersect2(nums1: number[], nums2: number[]): number[] {
    const length1 = nums1.length;
    const length2 = nums2.length;
    if (length1 > length2) {
        return getIntersection(nums1, nums2);
    }
    return getIntersection(nums2, nums1);
};
    
function getIntersection2(bigArray:number[], smallArray:number[]): number[] {
    let result:number[] = [];
    for (let i = 0; i < smallArray.length; i++) {
        let matchIndex = bigArray.findIndex(x => x === smallArray[i]);
        if (matchIndex !== -1) {
            result.push(smallArray[i]);
            bigArray.splice(matchIndex,1);
        }
    }
    return result;
}