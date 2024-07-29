/*
 * Break the rules: runing in O(n) time
 * Time Limit Exceeded
 * 19 / 24 testcases passed
 */
function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let answer = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i===j) continue;
            answer = answer * nums[j]
        }
        result[i] = answer;
    }
    return result;
};

/*
 * Ref: https://leetcode.com/problems/product-of-array-except-self/solutions/1342916/3-minute-read-mimicking-an-interview/
 */

/*
 * Break the rules: using the division operation
 * Runtime 96 ms Beats 87.32%
 * Memory 62.10 MB Beats 87.32%
 */
function productExceptSelf2(nums: number[]): number[] {
    let result: number[] = [];
    let zeroCount: number = 0;
    let zeroIndex: number = -Infinity;
    let totalProduct: number = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++
            zeroIndex = i;
            continue;
        }
        if (zeroCount >= 2) {
            break;
        }
        totalProduct = totalProduct * nums[i]
    }
    if (zeroCount >= 2) return Array(nums.length).fill(0);
    if (zeroCount === 1) {
        result = Array(nums.length).fill(0);
        result[zeroIndex] = totalProduct;
        return result;
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = totalProduct/nums[i]
    }
    return result;
};


/*
 * Runtime 125 ms Beats 22.73%
 * Memory 66.34 MB Beats 41.97%
 */
function productExceptSelf3(nums: number[]): number[] {
    const result: number[] = [];
    const pre: number[] = []; // production before i
    const suff: number[] = []; // production after i
    pre[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        pre[i] = pre[i-1] * nums[i-1]
    }
    suff[nums.length-1] = 1;
    for (let i = nums.length-2; i >= 0; i--) {
        suff[i] = suff[i+1] * nums[i+1]
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = pre[i] * suff[i]
    }
    return result;
};

function productExceptSelf4(nums: number[]): number[] {
    const result: number[] = [];
    const pre: number[] = []; // production before i
    const suff: number[] = []; // production after i
    
    for (let i = 1; i < nums.length; i++) {
        pre[i] = pre[i-1] * nums[i-1]
    }
    
    for (let i = nums.length-2; i >= 0; i--) {
        suff[i] = suff[i+1] * nums[i+1]
    }
    pre[0] = 1;
    suff[nums.length-1] = 1;

    for (let i = 1; i < nums.length; i++) {
        pre[i] = pre[i-1] * nums[i-1]; //pre[1] = pre[0] * nums[0]
        suff[i] = suff[i+1] * nums[i+1]; // suff[1] = suff[2] * nums[2]
        result[i] = pre[i] * suff[i]
    }
    return result;
};


/*
 * Runtime 103 ms Beats 69.18%
 * Memory 60.46 MB Beats 99.25%
 */
function productExceptSelf5(nums: number[]): number[] {
    const result: number[] = Array(nums.length).fill(1);
    let cur = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = result[i] * cur;
        cur = cur * nums[i];
    }
    cur = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        result[i] = result[i] * cur;
        cur = cur * nums[i];
    }
    return result;
};