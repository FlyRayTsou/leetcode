/*
 * Time Limit Exceeded
 * 21 / 45 testcases passed
 */
function climbStairs(n: number): number {
    return findWays(n);
};

function findWays(n: number): number {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        return findWays(n-1)+findWays(n-2)
    }
}


/*
 * Runtime 52 ms Beats 77.25%
 * Memory 51.06 MB Beats 15.43%
 */
function climbStairs(n: number): number {
    const memo: number[] = [];
    memo[1] = 1;
    memo[2] = 2
    findWays(n, memo);
    return memo[n];
};

function findWays(n: number, memo: number[]): number {
    if (memo[n] === undefined) {
        memo[n] = findWays(n-1, memo)+findWays(n-2, memo)
    }
    return memo[n]
}


/*
 * Runtime 47 ms Beats 92.94%
 * Memory 49.96 MB Beats 68.52%
 */
function climbStairs(n: number): number {
    const memo: number[] = [];
    memo[1] = 1;
    memo[2] = 2
    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2]
    }
    return memo[n];
};


/*
 * Runtime 47 ms Beats 92.94%
 * Memory 50.10 MB Beats 55.58%
 */
function climbStairs(n: number): number {
    let current = 0;
    let prevMinusTwo = 1
    let prevMinusOne = 2
    if(n === 1) return 1;
    if(n === 2) return 2;
    for (let i = 3; i <= n; i++) {
        current = prevMinusOne + prevMinusTwo
        prevMinusTwo = prevMinusOne;
        prevMinusOne = current;
    }
    return current;
};