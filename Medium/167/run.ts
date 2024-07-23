/*
 * Runtime 664 ms Beats 14.00%
 * Memory 51.17 MB Beats 79.30%
 */
function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i]+numbers[j] === target) return [i+1, j+1]
        }
    }
};


/*
 * Runtime 65 ms Beats 47.51%
 * Memory 51.53 MB Beats 38.35%
 * Ref: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/2128501/two-pointers-visual-explanation-java/
 */
function twoSum2(numbers: number[], target: number): number[] {
    let leftPointer = 0;
    let rightPointer = numbers.length-1;
    const result: number[] = [];
    while (leftPointer < rightPointer) {
        if (numbers[leftPointer] + numbers[rightPointer] === target) {
            result.push(leftPointer+1, rightPointer+1);
            break;
        } else if (numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
    return result;
};