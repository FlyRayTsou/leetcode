/**
 Do not return anything, modify matrix in-place instead.
 */
/*
 * Runtime 5 ms Beats 40.49%
 * Memory 59.20 MB Beats 48.91%
 */
 function setZeroes(matrix: number[][]): void {
    const ySet: Set<number> = new Set();
    const xSet: Set<number> = new Set();
    let rootX = false
    let rootY = false
    if (matrix[0][0] === 0) {
        rootX = true;
        rootY = true;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                matrix[y][0] = 0;
                matrix[0][x] = 0;
                if (x === 0) {
                    rootY = true;
                }
                if (y === 0) {
                    rootX = true;
                }
            }
        }
    }
    for (let y = 1; y < matrix.length; y++) {
        if (matrix[y][0] === 0 ) {
            for (let n = 1; n < matrix[0].length; n++) {
                matrix[y][n] = 0
            }
        }
    }
    for (let x = 1; x < matrix[0].length; x++) {
        if (matrix[0][x] === 0 ) {
            for (let m = 1; m < matrix.length; m++) {
                matrix[m][x] = 0
            }
        }
    }
    if (rootX || rootY) {
        if (rootY) {
            for (let y = 0; y < matrix.length; y++) {
                matrix[y][0] = 0
            }
        }
        if (rootX) {
            for (let x = 0; x < matrix[0].length; x++) {
                matrix[0][x] = 0
            }
        }

    }
};