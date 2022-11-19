// Runtime: 329 ms, faster than 45.13% of TypeScript online submissions for Palindrome Number.
// Memory Usage: 52.3 MB, less than 26.10% of TypeScript online submissions for Palindrome Number.
function isPalindrome(x: number): boolean {
    const xString = x.toString();
    let result = true;
    let start = 0;
    let end = xString.length-1;
    while(start < end) {
        if (xString[start] !== xString[end]) {
            result = false;
        }
        start++;
        end--;
    }
    return result;
};