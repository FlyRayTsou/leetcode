// Runtime: 85 ms, faster than 93.07% of TypeScript online submissions for Excel Sheet Column Number.
// Memory Usage: 46.3 MB, less than 6.93% of TypeScript online submissions for Excel Sheet Column Number.
function titleToNumber(columnTitle: string): number {
    let alphaMap = new Map([
       ['A', 1],
       ['B', 2],
       ['C', 3],
       ['D', 4],
       ['E', 5],
       ['F', 6],
       ['G', 7],
       ['H', 8],
       ['I', 9],
       ['J', 10],
       ['K', 11],
       ['L', 12],
       ['M', 13],
       ['N', 14],
       ['O', 15],
       ['P', 16],
       ['Q', 17],
       ['R', 18],
       ['S', 19],
       ['T', 20],
       ['U', 21],
       ['V', 22],
       ['W', 23],
       ['X', 24],
       ['Y', 25],
       ['Z', 26],
    ]);
    let result = 0;
    for (let i = columnTitle.length-1; i >= 0; i--) {
        let count = columnTitle.length - i - 1;
        result = result + alphaMap.get(columnTitle[i]) * 26 ** count
    }
    return result;
};

// Runtime: 123 ms, faster than 70.30% of TypeScript online submissions for Excel Sheet Column Number.
// Memory Usage: 44.9 MB, less than 68.32% of TypeScript online submissions for Excel Sheet Column Number.
function titleToNumber2(columnTitle: string): number {
    let result = 0;
    for (let i = columnTitle.length-1; i >= 0; i--) {
        let count = columnTitle.length - i - 1;
        let alphaValue = columnTitle.charCodeAt(i) - 64;
        result = result + alphaValue * 26 ** count
    }
    return result;
};