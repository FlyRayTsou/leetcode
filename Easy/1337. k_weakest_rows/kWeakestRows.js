/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function(mat, k) {
    let result = [];
    for(let i = 0; i < mat.length ; i++) {
        const index0 = mat[i].findIndex(num => num === 0);
        if (index0 !== -1) {
            mat[i] = index0;
            continue;
        }
        mat[i] = mat[i].length;
    }
    
    let j = 0;
    while(result.length < k) {
        const index = mat.findIndex(num => num === j);
        if (index != -1) {
            mat[index] = -1;
            result.push(index);
            continue;
        }
        j++
    }
    return result;
};


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows2 = function(mat, k) {
    let result = [];
    for(let i = 0; i < mat.length ; i++) {
        const index0 = mat[i].findIndex(num => num === 0);
        if (index0 !== -1) {
            mat[i] = index0;
            continue;
        }
        mat[i] = mat[i].length;
    }
    
    let j = 0;
    while(result.length < k) {
        const index = mat.findIndex(num => num === j);
        if (index != -1) {
            mat[index] = -1;
            result.push(index);
            continue;
        }
        j++
    }
    return result;
};
