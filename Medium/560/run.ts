/*
 * Ref
 * https://leetcode.com/problems/subarray-sum-equals-k/solutions/301242/general-summary-of-what-kind-of-problem-can-cannot-solved-by-two-pointers/
 * https://leetcode.com/problems/subarray-sum-equals-k/solutions/1759909/c-full-explained-every-step-w-dry-run-o-n-2-o-n-two-approaches/
 * keypoint: If prefix[i] - prefix[j] = k where i > j (i, j any index, in our case they are i = 4, j = 2)
	prefix[i] - k = prefix[j] na, (simple maths)
 * 假設i是5，prefixSum[5] = 15, k = 9，也就是說我們要找到一個j，j小於i，而且prefixSum[j] = 6，這樣prefixSum[5] - prefixSum[2] = 9
 */
/*
 * Runtime 2226 ms Beats 5.00%
 * Memory 55.91 MB Beats 83.50%
 */
function subarraySum(nums: number[], k: number): number {
    if (nums.length < 1) return 0
    let result: number = 0;
    const prefixSum: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
    }

    for(let i = 0; i < nums.length; i++) {
        if (prefixSum[i] === k) {
            result++
        }
        for (let j = 0; j < i; j++) {
            if (prefixSum[i] - prefixSum[j] === k) {
                result++
            }
        }
    }
    return result;
};