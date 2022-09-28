// Runtime: 113 ms, faster than 50.14% of TypeScript online submissions for Number of 1 Bits.
// Memory Usage: 44.6 MB, less than 72.18% of TypeScript online submissions for Number of 1 Bits.
function hammingWeight(n: number): number {
    const binaryString = n.toString(2);
    return  (binaryString.match(/1/g) || []).length;
};