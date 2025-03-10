/*
 * Runtime 42 ms Beats 93.64%
 * Memory 57.75 MB Beats 5.30%
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    let result = true;
    for (let key in obj) {
        result = false;
        break;
    }
    return result;
};