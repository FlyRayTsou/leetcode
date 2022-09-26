// Runtime: 93 ms, faster than 65.29% of TypeScript online submissions for Plus One.
// Memory Usage: 42.1 MB, less than 100.00% of TypeScript online submissions for Plus One.
function plusOne(digits: number[]): number[] {
    let carry = true;
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] === 9 && carry) {
            digits[i] = 0;
            carry = true;
        } else if (carry) {
            digits[i] = digits[i] + 1;
            carry = false;
        } else {
            break;
        }
    }
    if (carry) {
        digits.splice(0, 0, 1);
    }
    return digits;
};