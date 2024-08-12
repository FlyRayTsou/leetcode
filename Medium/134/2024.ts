
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



// sum of gas >= sum of cost
// [ - ]  [ + ]
/*
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
