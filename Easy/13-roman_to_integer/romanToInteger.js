/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = function(s) {
    const romanDic = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    const romanList = s.split('');
    let result = 0;
    for(let i = 0; i < romanList.length; i++) {
        if (i === romanList.length-1) return result + romanDic.get(romanList[i]);
        if (romanDic.get(romanList[i]) >= romanDic.get(romanList[i+1])) {
            result = result + romanDic.get(romanList[i]);
            continue;
        }
        result = result - romanDic.get(romanList[i]);
    }
    return result;
};