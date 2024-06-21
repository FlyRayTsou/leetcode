/* topic: substring
 * Thinking 
 * w1: word1.length
 * w2: word2.length
 * TC: O(max(w1, w2))
 * MC: O(1)
 * thinking
 * index start from 0 to min(w1, w2)
 * and add substring for the long words
 * substring(min(w1,w2)+1, max(w1,w2)-1)
 * curIndex = 0
 * "" += a + p
 * curIndex = 1
 * ap += bq
 * apbq += word1Len.substring(2, 3)
 * Runtime 48 ms Beats 95.25% 
 * Memory 51.22 MB Beats 92.14%
 */
function mergeAlternately(word1: string, word2: string): string {
    let result: string = "";
    const word1Len: number = word1.length;
    const word2Len: number = word2.length;
    const minLen: number = Math.min(word1Len, word2Len);
    let curIndex: number = 0;
    while(curIndex < minLen) {
        result += word1[curIndex] + word2[curIndex];
        curIndex++;
    }
    if (word1Len > word2Len) {
        result += word1.substring(minLen, word1Len)
    } else if (word2Len > word1Len) {
        result += word2.substring(minLen, word2Len)
    }
    return result;
};