/*
 * Runtime: 243 ms Beats 34.39% of users with TypeScript
 * Memory" 77.98 MB Beats 22.53% of users with TypeScript
 */
function partition(s: string): string[][] {
    if (s.length === 1) return [[s]]
    let result: string[][] = []
    dp(result, s, [])
    return result
};

function dp(result: string[][], newS: string, tempResult: string[]) {
    if (newS === "") {
        result.push(tempResult);
        return;
    }
    for (let i = 1; i <= newS.length; i++) {
        const tempString = newS.substring(0, i);
        if (!isPalindrome(tempString)) continue;
        dp(result, newS.substring(i, newS.length), [...tempResult, tempString]);
    }
}

function isPalindrome(s: string): boolean {
    if (s.length === 1) return true;
    let result: boolean = true;
    let start: number = 0;
    let end: number = s.length-1;
    while(start <= end) {
        if (s[start] !== s[end]) {
            result = false;
            break;
        }
        start++
        end--
    }
    return result;
}