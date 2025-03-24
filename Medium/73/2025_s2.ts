/**
 Do not return anything, modify matrix in-place instead.
 */
/*
 * Runtime 1 ms Beats 95.79% 
 * Memory 59.94 MB Beats 33.67%
 */
 function setZeroes(matrix: number[][]): void {
    const ySet: Set<number> = new Set();
    const xSet: Set<number> = new Set();
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                ySet.add(y)
                xSet.add(x)
            }
        }
    }
    for (let n = 0; n < matrix[0].length; n++) {
        for (const y of ySet) {
            matrix[y][n] = 0
        }

    }
    for (let m = 0; m < matrix.length; m++) {
        for (const x of xSet) {
            matrix[m][x] = 0
        }
    }
};