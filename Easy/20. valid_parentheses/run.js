/**
 * @param {string} s
 * @return {boolean}
 */
// Runtime: 86 ms, faster than 56.18% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.3 MB, less than 44.25% of JavaScript online submissions for Valid Parentheses.
 var isValid = function(s) {
    const trans = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
            continue;
        }
        let popChar = stack.pop();
        if (popChar === trans.get(s[i])) {
            continue;
        }
        return false;
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};
