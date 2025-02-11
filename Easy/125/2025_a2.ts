/*
 * Runtime 2 ms Beats 94.62%
 * Memory 57.06 MB Beats 16.00%
 */
function isPalindrome(s: string): boolean {
    s = s.toLowerCase()
    let left:number = 0;
    let right:number = s.length-1
    let result:boolean = true;
    while (left <= right) {
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }
        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }
        if (s[left] !== s[right]) {
            result = false;
            break;
        }
        left++
        right--
    }
    return result;
};

function isAlphanumeric(char: string): boolean {
    if (/[a-z0-9]/i.test(char)) {
        return true;
    }
    return false;
}