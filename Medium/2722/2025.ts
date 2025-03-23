/* 
 * Runtime 271 ms Beats 90.50%
 * Memory 98.98 MB Beats 53.17%
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const result: ArrayType[] = [];
    arr1.sort((a, b) => a.id - b.id)
    arr2.sort((a, b) => a.id - b.id)
    let left = 0;
    let right = 0;
    while(left < arr1.length && right < arr2.length) {
        const curLeftId = arr1[left]["id"];
        const curRightId = arr2[right]["id"];
        if (curLeftId < curRightId) {
            result.push(arr1[left])
            left++
            continue;
        } else if (curRightId < curLeftId) {
            result.push(arr2[right])
            right++
            continue;
        } else {
            const newObject = { ...arr1[left], ...arr2[right]};
            left++;
            right++
            result.push(newObject)
            continue;
        }
    }
    for (let i = left; i < arr1.length; i++) {
        result.push(arr1[i])
    }
    for (let i = right; i < arr2.length; i++) {
        result.push(arr2[i])
    }
    return result
};