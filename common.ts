/*
 * Check whether a string is a palindrome
 */
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

/*
 * Convert Set to Array
 * https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array
 */
function convertSetToArray(set: Set<number>) {
    return Array.from(set);
}