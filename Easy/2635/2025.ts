function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];
    for (let k = 0; k < arr.length; k++) {
        result.push(fn(arr[k], k));
    }
    return result;
};