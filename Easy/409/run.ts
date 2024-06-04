/*
 * TC: O(s.length)
 * MC: O(s.length)
 * Runtime: 58 ms Beats 78.11% of users with TypeScript
 * Memory: 51.62 MB Beats 92.45% of users with TypeScript
 */
function longestPalindrome(s: string): number {
    let hashMap: Map<string, number> = new Map();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (!hashMap.has(s[i]) || hashMap.get(s[i]) === 0) {
            hashMap.set(s[i], 1);
            continue;
        }
        if (hashMap.get(s[i]) === 1) {
            hashMap.set(s[i], 0)
            result = result + 2;
        }
    }
    
    return result === s.length ? result : result + 1
};