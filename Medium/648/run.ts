/*
 * 1. edge case
 *      dictionary is empty or sentence is empty then return empty
 * 2. solution thinking and complexity
 *      m : dictinoary length
 *      n : sentence length
 *      x : average word's length
 *      put dictinoary in as a hashMap -> O(m)
 *      split sentence as array -> O(n)
 *      for loop each word   -> O(n/x)
 *          for loop from length 1 -> length -> O(x)
 *          check exist in hashMap or not -> O(1)
 * 3. implement
 * 4. dry-run
 * new Map
 *   cat -> true
 *   bat -> true
 *   rat -> true
 * splitWords
 *   the
 *   cattle
 *   was
 *   rattled
 *   by
 *   the
 *   battery * 
 * i=0, curMatchWord = "", result =""
 * i=0, j=0, curMatchWord = "t", result =""
 * i=0, j=1, curMatchWord = "th", result =""
 * i=0, j=2, curMatchWord = "the", result ="the "
 * i=1, j=0, curMatchWord = "c", result ="the "
 * i=1, j=1, curMatchWord = "ca", result ="the "
 * i=1, j=2, curMatchWord = "cat", result ="the cat "
 * ...
 * i=6, j=2, curMatchWord = "bat", result ="the cat ... bat"
 * Time Limit Exceeded
 * 126 / 127 testcases passed
 */
function replaceWords(dictionary: string[], sentence: string): string {
    const hashMap: Map<string, boolean> = new Map()
    const splitWords = sentence.split(" ")
    let result = ""
    if (dictionary.length === 0 || sentence.length === 0) return sentence
    for (let vocabulary of dictionary) {
        hashMap.set(vocabulary, true)
    }
    
    for (let i = 0; i < splitWords.length; i++) {
        let curMatchWord = "";
        for (let j = 0; j < splitWords[i].length; j++) {
            curMatchWord += splitWords[i][j]
            if (hashMap.has(curMatchWord)) {
                break;
            }
        }
        result += curMatchWord
        if (i !== splitWords.length-1) {
            result += " "
        }
    }
    return result
};