/*
 * Runtime 0 ms Beats 100.00%
 * Memory 55.34 MB Beats 6.04%
 */
function lengthOfLastWord(s: string): number {
    let pointer = s.length-1;
    while (s[pointer] == " ") {
        pointer = pointer - 1;
    }
    const endIndex = pointer;
    while (s[pointer] != " " && pointer >= 0) { 
        pointer = pointer - 1;
    }
    const startIndex = pointer + 1;
    return endIndex - startIndex + 1
};