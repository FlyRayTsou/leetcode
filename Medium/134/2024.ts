
/*
 * Time Limit Exceeded
 * 34 / 40 testcases passed
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const stationLen = gas.length;
    // start index
    let result = -1;
    for (let i = 0; i < gas.length; i++) {
        // calculation times
        let stationCount = 0;
        let remainGas = 0;
        while (stationCount < gas.length) {
            remainGas += gas[(i+stationCount)%stationLen];
            remainGas -= cost[(i+stationCount)%stationLen];
            if (remainGas < 0) break;
            stationCount++;
        }
        if (remainGas >= 0) result = i;
    }
    return result;
};



/* 
 * 思路。
 * 1. Gas的總量比Cost的總量還大或等於的話，就一定存在一個答案 sum of gas >= sum of cost，題目也有提到，如果有解的話，解是唯一的
 * 2. 從index開始時，或index本身的gas - cost < 0的話，就代表這個index不可能是答案
 * 3. 在找的時候的想法是，從0 index開始去尋找，如果計算到 x index時，方向剩餘瓦斯量是負數的
 * 則代表代表0 ~ x index都不可能是答案。因為0 index的剩餘瓦斯量是正數，我們才會去計算。
 * 而少了0 index，從1 index開始到x的話，少了一個正數，所以+數的瓦斯量會更少。所以我們就可以得知，0 ~ x index都不可能是答案
 * 所以接著我們就可以從x+1 index開始計算。
 * 4. 另外，我們只需要計畫x+1到最後一個index的瓦斯是否足夠即可。
 * 因為你可以想像[0~x]是一個負數，而[x+1~n]是一個正數，而我們的前提是sum of gas >= sum of cost，所以[x+1~n]是正數的話，則代表x+1 index是答案
 *
 * Reference: https://www.youtube.com/watch?v=lJwbPZGo05A
 * Runtime 76 ms Beats 82.02%
 * Memory 61.57 MB Beats 34.96%
 */
function canCompleteCircuit2(gas: number[], cost: number[]): number {
    const stationCount = gas.length;
    let sumGas = 0;
    let sumCost = 0;
    for (let i = 0; i < stationCount; i++) {
        sumGas += gas[i];
        sumCost += cost[i];
    }
    if (sumGas < sumCost) return -1;
    let total = 0;
    let result = 0;
    for (let i = 0; i < stationCount; i++) {
        total = total + gas[i] - cost[i]
        if (total < 0) {
            total = 0;
            result = i+1
        }
    }
    return result;
};
