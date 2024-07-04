
function climbStairs1(n: number): number {
    const dp: number[] = []
    dp[1] = 1
    dp[2] = 2
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
};


/*
 * Runtime 58 ms Beats 45.19%
 * Memory 50.32 MB Beats 21.02%
 */ 
function climbStairs2(n: number): number {
    if (n === 1) return 1
    let pprev = 1
    let prev = 2
    for(let i = 3; i <= n; i++) {
        let temp = prev
        prev = prev + pprev
        pprev = temp
    }
    return prev
};