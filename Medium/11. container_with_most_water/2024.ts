/*
 * Runtime 65 ms Beats 85.51%
 * Memory 59.02 MB Beats 68.50%
 */
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length-1;
    let curMax = 0;
    while (left < right) {
        curMax = Math.max(curMax, Math.min(height[left], height[right])*(right-left))
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return curMax;
};

/*
 * Explanation: https://leetcode.com/problems/container-with-most-water/solutions/6100/simple-and-clear-proof-explanation/
 */