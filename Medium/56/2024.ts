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


/*
 * Ref: https://www.youtube.com/watch?v=44H3cEC2fFM
 * Runtime 90 ms Beats 84.07%
 * Memory 61.24 MB Beats 16.51%
 */
function merge2(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);
    const result: number[][] = [intervals[0]];
    for (let [start, end] of intervals) {
        if (start <= result[result.length-1][1]) {
            result[result.length-1][1] = Math.max(result[result.length-1][1], end);
        } else {
            result.push([start, end]);
        }
    }
    return result;
};