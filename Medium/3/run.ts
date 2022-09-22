// Runtime: 531 ms, faster than 20.64% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 50.9 MB, less than 15.58% of TypeScript online submissions for Longest Substring Without Repeating Characters.
function lengthOfLongestSubstring(s: string): number {
    let curString = '';
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        curString = s[i];
        for (let j = i+1; j < s.length; j++) {
            if (curString.indexOf(s[j]) === -1) {
                curString = curString + s[j];
                continue;
            }
            break;
        }
        max = Math.max(max, curString.length);
    }
    return max;
};


// Runtime: 514 ms, faster than 21.62% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 49.9 MB, less than 26.03% of TypeScript online submissions for Longest Substring Without Repeating Characters.
function lengthOfLongestSubstring2(s: string): number {
    let curString = '';
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        if (curString.length < max && (s.length - i - 1) < max) break;
        curString = s[i];
        for (let j = i+1; j < s.length; j++) {
            if (curString.indexOf(s[j]) === -1) {
                curString = curString + s[j];
                continue;
            }
            break;
        }
        max = Math.max(max, curString.length);
        
    }
    return max;
};