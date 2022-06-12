# URL

https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

# Result

* Runtime: 81 ms, faster than 64.67% of JavaScript online submissions for The K Weakest Rows in a Matrix.
* Memory Usage: 43.9 MB, less than 86.42% of JavaScript online submissions for The K Weakest Rows in a Matrix.


## Explanation

If you know the first 0's index, then you will know how many soldiers are in the same row.
If you can't find the 0's, then it is means that there are all soldiers in the same row.
After getting the number of soldiers, we can arrange index about the weakest row to put in the result array from power 0 to n.
If the result array length is k, then we return the result.
