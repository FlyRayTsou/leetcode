/*
 * Runtime 108 ms Beats 32.59%
 * Memory 60.14 MB Beats 52.03% 
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0])
    let currentInterval: number[] = intervals[0]
    let result: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        if (i < intervals.length-1 && intervals[i+1][0] <= currentInterval[1]) {
            currentInterval = [currentInterval[0], Math.max(currentInterval[1], intervals[i+1][1])]
        } else {
            result.push(currentInterval);
            if (i < intervals.length) {
                currentInterval = intervals[i+1]
            }
        }
    }
    return result
};