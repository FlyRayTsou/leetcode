/*
 * Runtime 78 ms Beats 63.53%
 * Memory 55.59 MB Beats 32.46%
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length === 0) return [newInterval]
    let insertIndex = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0]) {
            insertIndex = i;
        }
    }
    intervals[0][0] >= newInterval[0] ? intervals.splice(insertIndex, 0, newInterval) : intervals.splice(insertIndex+1, 0, newInterval);
    const result: number[][] = [];
    let curInterval = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= curInterval[1]) {
            curInterval = [curInterval[0], Math.max(curInterval[1], intervals[i][1])]
            if (i === intervals.length-1) result.push(curInterval)
        } else {
            result.push(curInterval)
            curInterval = intervals[i]
            if (i === intervals.length-1) result.push(intervals[i])
        }        
    }
    return result;
};


/*
 * Same approach as 56/2024.ts
 * Runtime 77 ms Beats 68.41%
 * Memory 56.77 MB Beats 15.36%
 */
function insert2(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length === 0) return [newInterval]
    let insertIndex = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0]) {
            insertIndex = i;
        }
    }
    intervals[0][0] >= newInterval[0] ? intervals.splice(insertIndex, 0, newInterval) : intervals.splice(insertIndex+1, 0, newInterval);
    const result: number[][] = [intervals[0]];
    for (const [start, end] of intervals) {
        if (start <= result[result.length-1][1]) {
            result[result.length-1][1] = Math.max(end, result[result.length-1][1]);
        } else {
            result.push([start, end]);
        }
    }
    return result;
};


/*
 * Ref: https://www.youtube.com/watch?v=A8NUOmlwOlM
 * Runtime 63 ms Beats 98.60%
 * Memory 54.10 MB Beats 86.21%
 */
function insert3(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            return result.concat(intervals.slice(i, intervals.length));
        } else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }
    result.push(newInterval);
    return result;
};