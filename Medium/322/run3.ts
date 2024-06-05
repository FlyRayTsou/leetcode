/*
 * Bottom-up DP
 * Runtime 98 ms Beats 69.63% of users with TypeScript
 * Memory 55.53 MB Beats 84.75% of users with TypeScript
 */
function coinChange(coins: number[], amount: number): number {
    let dp = Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i-coins[j]]+1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};