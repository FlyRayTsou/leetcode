function groupAnagrams(strs: string[]): string[][] {
    let result:string[][] = [];
    const keyIndexMap = new Map();
    let j = 0;
    for(let i = 0; i<strs.length; i++) {
        const sortString = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
        const keyIndex = keyIndexMap.get(sortString);
        if (keyIndex === undefined) {
            keyIndexMap.set(sortString, j);
            result[j] = [strs[i]];
            j++;
            continue;
        }
        result[keyIndex].push(strs[i]);
    }
    return result;
};