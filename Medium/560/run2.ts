/*
 * Runtime 93 ms Beats 48.75%
 * Memory 60.04 MB Beats 60.50%
 */
function subarraySum(nums: number[], k: number): number {
    if (nums.length < 1) return 0
    let result: number = 0;
    const hashMap: Map<number, number> = new Map<number, number>();
    const prefixSum: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
    }

    for(let i = 0; i < nums.length; i++) {
        if (prefixSum[i] === k) {
            result++
        }
        if (hashMap.has(prefixSum[i]-k)) {
            result += hashMap.get(prefixSum[i]-k)
        }
        if (hashMap.has(prefixSum[i])) {
            hashMap.set(prefixSum[i], hashMap.get(prefixSum[i])+1)
        } else {
            hashMap.set(prefixSum[i], 1)
        }
        
    }
    return result;
};