/*
 * Runtime 49 ms Beats 85.31%
 * Memory 59.50 MB Beats 5.81%
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result: Obj[][] = [];
    let itemArr: Obj[] =[];
    let itemSize = 0;
    for (let i = 0; i < arr.length; i ++) {
        itemArr.push(arr[i])
        itemSize++
        if (itemSize === size || i === arr.length-1) {
            result.push(itemArr)
            itemSize = 0;
            itemArr = []
        }
    }
    return result;
};
