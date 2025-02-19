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

/**
 * Returns the number of digits in a given number without converting it to a string.
 * @param number - The number to check.
 * @returns The number of digits in the number.
 */
function getDigitCount(number: number): number {
    let digitCount = 0;
    if (number === 0) return 1;
    while (number >= 1) {
        number = Math.floor(number / 10);
        digitCount++;
    }
    return digitCount;
}