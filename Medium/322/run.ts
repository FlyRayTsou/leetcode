/*
 * Time Limit Exceeded
 * 15 / 189 testcases passed
 */
function coinChange(coins: number[], amount: number): number {
    let answer = dp(coins, amount, 0, Infinity);
    return  answer === Infinity ? -1 : answer;
};

function dp(coins: number[], currentAmount: number, count: number, result: number) {
    if (currentAmount === 0) {
        return count;
    }
    if (currentAmount < 0) {
        return Infinity;
    }
    for (let i = 0; i < coins.length; i++) {
        result = Math.min(result, dp(coins, currentAmount-coins[i], count+1, result));
    }
    return result

}