# URL

https://leetcode.com/problems/number-of-good-pairs/

# Result

* Runtime: 70 ms, faster than 71.99% of JavaScript online submissions for Number of Good Pairs.
* Memory Usage: 41.4 MB, less than 96.23% of JavaScript online submissions for Number of Good Pairs.

## Explanation

|Count of same number|good pairs|
|--|--|
|1|0|
|2|1|
|3|3=(1+2)|
|4|6=(1+2+3)|
|...|...|
|n|(1+(n-1))*(n-1)/2=(1+2+...+n-1)|
