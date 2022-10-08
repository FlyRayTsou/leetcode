// Runtime: 111 ms, faster than 84.65% of TypeScript online submissions for Valid Anagram.
// Memory Usage: 45.5 MB, less than 59.61% of TypeScript online submissions for Valid Anagram.
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            hashMap.set(s[i], hashMap.get(s[i])+1);
        } else {
            hashMap.set(s[i], 1);
        }
        
        if (hashMap.has(t[i])) {
            hashMap.set(t[i], hashMap.get(t[i])-1);
        } else {
            hashMap.set(t[i], -1);
        }

        if (hashMap.get(s[i]) === 0) {
            hashMap.delete(s[i]);
        }
        
        if (hashMap.get(t[i]) === 0) {
            hashMap.delete(t[i]);
        }
    }
    
    return hashMap.size === 0 ? true : false;
};