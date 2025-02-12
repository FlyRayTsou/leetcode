/*
 * Runtime 8 ms Beats 56.85%
 * Memory 58.84 MB Beats 94.77%
 */

function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    const numberLength = countDigit(x);
    let leftDivisor = Math.pow(10,(numberLength-1))
    let rightDivisor = 1;
    let result = true;
    while (leftDivisor >= rightDivisor) {
        
        let leftNum = Math.floor(x / leftDivisor);
        if (leftNum >= 10) {
            leftNum = leftNum % 10;
        }
        let rightNum = Math.floor(x / rightDivisor);
        if (rightNum >= 10) {
            rightNum = rightNum % 10;
        }
        if (rightNum != leftNum) {
            result = false;
            break;
        }
        
        leftDivisor = leftDivisor/10;
        rightDivisor = rightDivisor*10;
    }
    return result;
};

function countDigit(x: number): number {
    let divisor = 1;
    let digitNum = 1;
    while (x / divisor >= 10) {
        divisor = divisor*10;
        digitNum++;
    }
    return digitNum;
}