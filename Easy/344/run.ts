// Runtime: 176 ms, faster than 27.51% of TypeScript online submissions for Reverse String.
// Memory Usage: 49.7 MB, less than 82.53% of TypeScript online submissions for Reverse String.
function reverseString(s: string[]): void {
    s.reverse();
};


// Runtime: 172 ms, faster than 32.60% of TypeScript online submissions for Reverse String.
// Memory Usage: 50.2 MB, less than 41.54% of TypeScript online submissions for Reverse String.
function reverseString2(s: string[]): void {
    const strLen = s.length;
    for (let i = 0; i < strLen/2; i++) {
        let temp = s[i];
        s[i] = s[strLen-i-1]; 
        s[strLen-i-1] = temp;
    }
};