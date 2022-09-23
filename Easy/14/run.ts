// Runtime: 106 ms, faster than 58.69% of TypeScript online submissions for Longest Common Prefix.
// Memory Usage: 45 MB, less than 28.76% of TypeScript online submissions for Longest Common Prefix.
function longestCommonPrefix(strs: string[]): string {
    let result = "";
    let findDifference = false;
    let minLength = 201;
    let minIndex = 201;

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
            minIndex = i;
        }
    }
    if (minLength === 0) return result;
    let curPrefix = "";
    let count = 0;
    while (!findDifference && count < minLength) {
        curPrefix = curPrefix + strs[minIndex][count];
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(curPrefix)) {
                findDifference = true;
                break;
            }
        }
        if (!findDifference) {
            result = curPrefix;
        }
        count++;
    }
    return result;
};