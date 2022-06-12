/**
 * @param {number[]} nums
 * @return {number}
 */
 const numIdenticalPairs = function(nums) {
    const uniqueNums = [...new Set(nums)];
    let result = 0;
    for(let i = 0; i < uniqueNums.length; i++) {
        const filterLength = nums.filter(num => num === uniqueNums[i]).length;
        result += (filterLength*(filterLength-1))/2;
    }
    return result;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 const numIdenticalPairs2 = function(nums) {
    let resultArray = [];
    for (let i = 0; i < nums.length; i++) {
        if(resultArray[nums[i]] === undefined) {
            resultArray[nums[i]] = 1;
            continue;
        }
        resultArray[nums[i]] = resultArray[nums[i]] + 1;
    }
    return resultArray.reduce(
        (previousValue, currentValue) => previousValue + (currentValue*(currentValue-1))/2,
        0
    );

};


/**
 * @param {number[]} nums
 * @return {number}
 */
 const numIdenticalPairs3 = function(nums) {
    let resultArray = [];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if(resultArray[nums[i]] === undefined) {
            resultArray[nums[i]] = 1;
            continue;
        }
        resultArray[nums[i]] += 1;
        result += resultArray[nums[i]] - 1;
    }
    return result;

};