/*
 * use a hashMap to store 2d dimension
 * store like array[alphabet][0: string index in words]
 * if value is not zero then continue, if one value is zero then stop to add to result
 * TC: O(words.length * string.length * 26)
 * SC: O(26 * words.length)
 * Runtime 77 ms Beats 28.07% of users with TypeScript
 * Memory 53.71 MB Beats 45.61% of users with TypeScript
 */
function commonChars(words: string[]): string[] {
    let result: string[] = []

    let hashMap: { [key: string]: number[] }[] = [];
    const alphabetAll = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alphabetAll.length; i ++) {
        for (let j = 0; j < words.length; j++) {
            hashMap[alphabetAll[i]][j] = 0
        }
    }
    for (let m = 0; m < words.length; m++) {
        for (let n = 0; n < words[m].length; n++) {
            hashMap[words[m][n]][n]++
        }
    }
    for (let p = 0; p < alphabetAll.length; p++) {
        let count = 0
        let isContinue = true
        while (isContinue) {
            for (let q = 0; q < words.length; q++) {
                if (hashMap[alphabetAll[p]][q] === 0) {
                    isContinue = false;
                    break;
                }
                hashMap[alphabetAll[p]][q]--
                count++
            }
            if (count === words.length) {
                result.push(alphabetAll[p])
            }
            count = 0;
        }
    }
    return result;
};