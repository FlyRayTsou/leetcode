// Runtime: 101 ms, faster than 43.24% of TypeScript online submissions for Pascal's Triangle.
// Memory Usage: 42.8 MB, less than 74.89% of TypeScript online submissions for Pascal's Triangle.
function generate(numRows: number): number[][] {
    if (numRows===1) return [[1]];
    if (numRows===2) return [[1], [1,1]];
    let result = [[1],[1,1]];
    for (let i = 3; i <= numRows; i++) {
        let curResult: number[] = [];
        curResult.push(1);
        let j = 0;
        while(result[i-2][j] !== undefined && result[i-2][j+1] !== undefined) {
            curResult.push(result[i-2][j] + result[i-2][j+1]);
            j++;
        }
        curResult.push(1);
        result.push(curResult);
    }
    return result;
};


// Runtime: 93 ms, faster than 58.25% of TypeScript online submissions for Pascal's Triangle.
// Memory Usage: 43 MB, less than 59.14% of TypeScript online submissions for Pascal's Triangle.
function generate2(numRows: number): number[][] {
    if (numRows===1) return [[1]];
    if (numRows===2) return [[1], [1,1]];
    let result = [[1],[1,1]];
    for (let i = 2; i < numRows; i++) {
        let curResult:number[] = [];
        curResult.push(1);
        for (let j = 1; j < result[i-1].length; j++) {
            curResult.push(result[i-1][j-1] + result[i-1][j]);
        }
        curResult.push(1);
        result.push(curResult);
    }
    return result;
};