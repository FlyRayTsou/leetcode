/*
 * Runtime 74 ms Beats 5.52%
 * Memory 52.54 MB Beats 14.36%
 */
function mergeAlternately(word1: string, word2: string): string {
    let result: string = "";
    const word1Len: number = word1.length;
    const word2Len: number = word2.length;
    const maxLen: number = Math.max(word1Len, word2Len);
    let curIndex: number = 0;
    while(curIndex < maxLen) {
        result += word1[curIndex] !== undefined ? word1[curIndex] : "";
        result += word2[curIndex] !== undefined ? word2[curIndex] : "";
        curIndex++;
    }
    return result;
};