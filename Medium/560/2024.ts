/*
 * Runtime 1706 ms Beats 6.80%
 * Memory 53.61 MB Beats 96.84%
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function subarraySum(nums: number[], k: number): number {
    let result: number = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum: number = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) {
                result++;
            }
        }
    }
    return result;
};


/*
 * Reference: https://www.youtube.com/watch?v=fFVZt-6sgyo
 * Runtime 85 ms Beats 62.72%
 * Memory 59.76 MB Beats 74.31%
 */
function subarraySum(nums: number[], k: number): number {
    let result: number = 0;
    let hashMap: Map<number, number> = new Map<number, number>();
    let sum: number = 0;
    hashMap.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const validCount = hashMap.get(sum-k);
        if (validCount !== undefined) {
            result = result + validCount
        }
        // If we put below part before validCount, we will get wrong answer
        // Example: nums = [1], k = 0
        const sumCount = hashMap.get(sum);
        if (sumCount === undefined) {
            hashMap.set(sum, 1);
        } else [
            hashMap.set(sum, sumCount+1)
        ]
    }
    return result;
};



