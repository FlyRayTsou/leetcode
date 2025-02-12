/*
 * Runtime 9 ms Beats 47.22%
 * Memory 59.74 MB Beats 40.37%
 */
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const s = x.toString();
    let left = 0;
    let right = s.length-1;
    let result = true;
    while (left <= right) {
        if (s[left] !== s[right]) {
            result = false;
            break;
        }
        left++;
        right--
    }
    return result;
};