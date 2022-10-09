// Runtime: 128 ms, faster than 26.04% of TypeScript online submissions for Search a 2D Matrix II.
// Memory Usage: 45.8 MB, less than 58.33% of TypeScript online submissions for Search a 2D Matrix II.
function searchMatrix(matrix: number[][], target: number): boolean {
    let xBorder = 0;
    let yBorder = 0;
    let result = false;
    while (matrix[0][xBorder] <= target) {
        xBorder++
    }
    while (matrix[yBorder] !== undefined && matrix[yBorder][0] <= target) {
        yBorder++
    }
    for (let x = 0; x < xBorder; x++) {
        for (let y = 0; y < yBorder; y++) {
            if (matrix[y][x] === target) {
                result = true;
                break;
            }
        }
        if (result) break;
    }
    return result;
};


// Runtime: 114 ms, faster than 40.62% of TypeScript online submissions for Search a 2D Matrix II.
// Memory Usage: 46.3 MB, less than 15.62% of TypeScript online submissions for Search a 2D Matrix II.
function searchMatrix2(matrix: number[][], target: number): boolean {
    let xBorder = 0;
    let yBorder = 0;
    let result = false;
    while (matrix[0][xBorder] <= target) {
        xBorder++
    }
    while (matrix[yBorder] !== undefined && matrix[yBorder][0] <= target) {
        yBorder++
    }
    for (let y = 0; y < yBorder; y++) {
        let low = 0;
        let high = xBorder-1;
        while (low <= high) {
            const middle = Math.floor((low+high)/2);
            if (target > matrix[y][middle]) {
                low = middle+1;
            } else if (target < matrix[y][middle]) {
                high = middle-1;
            } else {
                result = true;
                break;
            }
        }
        if (result) break;
    }
    return result;
};