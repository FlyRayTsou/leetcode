/*
 * Runtime 1240 ms Beats 5.01%
 * Memory 57.96 MB Beats 11.77%
 */
function isPalindrome(s: string): boolean {
    const stack: string[] = [];
    s = s.toLowerCase()
    for(let i = 0; i < s.length; i++) {
        if (!isAlphanumeric(s[i])) continue;
        stack.push(s[i])
    }

    for(let i = s.length-1; i >= 0; i--) {
        const peek = stack[0];
        if (!isAlphanumeric(s[i])) continue;
        if (peek === s[i]) stack.shift()
    }
    return stack.length === 0 ? true : false;
};

function isAlphanumeric(char: string): boolean {
    if (/[a-z0-9]/i.test(char)) {
        return true;
    }
    return false;
}
