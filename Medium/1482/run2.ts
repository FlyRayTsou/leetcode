/*
 * Time Limit Exceeded 
 * 84 / 93 testcases passed
 */
function minDays(bloomDay: number[], m: number, k: number): number {
    if (bloomDay.length < m*k) return -1
    let minimumDay = Infinity;
    let bouquetNumber = 0;
    const sortBloomDay = [...bloomDay];
    sortBloomDay.sort((a, b) => a-b)
    const setBloomDay = new Set(sortBloomDay)
    for (let i of setBloomDay) {
        if (minimumDay !== Infinity) {
            break;
        }
        let adjacentCount = 0
        for (let j = 0; j < bloomDay.length; j++) {
            if (bloomDay[j] <= i) {
                adjacentCount++
            } else {
                adjacentCount = 0;
            }
            if (adjacentCount === k) {
                adjacentCount = 0;
                bouquetNumber++
            }
            if (bouquetNumber === m) {
                minimumDay = i
                break;
            }
        }
        bouquetNumber = 0
    }
    return minimumDay
};