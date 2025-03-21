/*
 Runtime 117 ms Beats 69.36%
 Memory 70.41 MB Beats 51.16%
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    return arr.sort((a, b) => fn(a) - fn(b))
};