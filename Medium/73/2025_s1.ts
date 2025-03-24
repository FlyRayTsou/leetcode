/**
 Do not return anything, modify matrix in-place instead.
 */
/*
 * Runtime 0 ms Beats 100.00% 
 * Memory 59.45 MB Beats 45.14%
 */

 function setZeroes(matrix: number[][]): void {
    let zeroCoords: {y: number, x: number}[] = [];
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                zeroCoords.push({y, x})
            }
        }
    }
    for (let i = 0; i < zeroCoords.length; i++) {
        let { y, x } = zeroCoords[i];
        for (let n = 0; n < matrix[0].length; n++) {
            matrix[y][n] = 0
        }
        for (let m = 0; m < matrix.length; m++) {
            matrix[m][x] = 0
        }
    }
    // scan to find zero -> O(mn)
};