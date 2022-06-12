# URL

https://leetcode.com/problems/container-with-most-water/

# Result

Runtime: 2189 ms, faster than 5.02% of JavaScript online submissions for Container With Most Water.
Memory Usage: 53.3 MB, less than 5.12% of JavaScript online submissions for Container With Most Water.

# Explanation

First, get the unique array from height array by using Set().
Reverse the hight array and assign to new Array by slice().reverse().

In case1, literate unique array, find the same number as first index in height array.
Find the index of the value is bigger or equal than the same number as last index in reverse array.

In case2, literate unique array, find the same number as first index in reverse array.
Find the index of the value is bigger or equal than the same number as last index in height array.

Finally, Calculate the sum. If the sum is bigger than current max value, then update.