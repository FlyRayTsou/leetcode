/*
 * Time Limit Exceeded
 * 51 / 55 testcases passed
// TC : O(mxn+ mxn * mxn)
// MC : O(mxn)
// Find the availablee start point and find the 0 point

// for loop start from available point
//     dp(direction, foundGoldCount, GoldSum, available point, disable point, movedPoint)
 */
function getMaximumGold(grid: number[][]): number {
    let m = grid.length // vertical
    let n = grid[0].length // horizon
    let result = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let startPoint = [i, j]
            let seenP = new Map()
            let currentSum = 0
            let currentCount = 0
            result = Math.max(result, dp(grid, startPoint, seenP, currentSum, currentCount))
        }
    }
    return result
};

function dp(grid, currentPoint, seenP, currentSum, currentCount) {
    if (currentPoint[0] === grid.length || currentPoint[1] === grid[0].length || currentPoint[0] < 0 || currentPoint[1] < 0) {
        return currentSum
    }
    if (grid[currentPoint[0]][currentPoint[1]] === 0) {
        return currentSum
    }
    if (currentCount === 25) {
        return currentSum
    }
    if (seenP.has(`${currentPoint[0]},${currentPoint[1]}`)) {
        return currentSum
    }

    currentSum += grid[currentPoint[0]][currentPoint[1]]
    currentCount++
    seenP.set(`${currentPoint[0]},${currentPoint[1]}`, [currentPoint[0],currentPoint[1]])
    return Math.max(
        dp(grid, [currentPoint[0]-1, currentPoint[1]], new Map(seenP), currentSum, currentCount), // U
        dp(grid, [currentPoint[0]+1, currentPoint[1]], new Map(seenP), currentSum, currentCount), // D
        dp(grid, [currentPoint[0], currentPoint[1]-1], new Map(seenP), currentSum, currentCount), // L
        dp(grid, [currentPoint[0], currentPoint[1]+1], new Map(seenP), currentSum, currentCount), // R
    )

}