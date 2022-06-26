/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let result = 100001;
    let calArray = [];
    for (let i = 0; i < s.length; i++) {
        if(calArray[s[i]] === undefined) {
            calArray[s[i]] = i;
        } else if (calArray[s[i]] > -1) {
            calArray[s[i]] = null;
        }
    }
    const lowercaseAll = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 26; i++) {
        if (calArray[lowercaseAll[i]] !== undefined && calArray[lowercaseAll[i]] !== null) {
            result =  calArray[lowercaseAll[i]] < result ? calArray[lowercaseAll[i]] : result;
        }   
    }
    if (result === 100001) {
        return -1;
    }
    return result;
};