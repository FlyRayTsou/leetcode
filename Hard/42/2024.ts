/*
 * Reference: https://www.youtube.com/watch?v=ZI2z5pq0TqA
 * Runtime 86 ms Beats 25.46%
 * Memory 55.78 MB Beats 15.64%
 */
function trap(height: number[]): number {
    let leftMax: number[] = [0];  // maxLeftBar before current position
    let rightMax: number[] = []; // maxRightBar after current position
    let result: number = 0;
    for(let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(height[i-1], leftMax[i-1])
    }
    rightMax[height.length-1] = 0;
    for(let i = height.length-2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i+1], rightMax[i+1])
    }

    for (let i = 0; i < height.length; i++) {
        const trapWater = Math.min(leftMax[i], rightMax[i])-height[i];
        result = trapWater > 0 ? result+trapWater : result;
    }
    return result;
};