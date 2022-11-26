// Runtime: 104 ms, faster than 47.13% of TypeScript online submissions for Length of Last Word.
// Memory Usage: 42.6 MB, less than 89.68% of TypeScript online submissions for Length of Last Word.
function lengthOfLastWord(s: string): number {
    let firstIndex = -1;
    let secondIndex = -1;
    let result = 0;
    for (let i = s.length-1; i >= 0; i--) {
        if (firstIndex === -1 && s[i] !== ' ') {
            firstIndex = i;
        }
        if (firstIndex !== -1 && secondIndex === -1 && s[i] === ' ') {
            secondIndex = i;
            break;
        }
    }
    return firstIndex - secondIndex;
};