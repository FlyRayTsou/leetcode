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