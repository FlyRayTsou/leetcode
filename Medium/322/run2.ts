/*
 * Time Limit Exceeded
 * 31 / 189 testcases passed
 */
function coinChange(coins: number[], amount: number): number {
    let memorization: number[] = Array(amount+1).fill(Infinity)
    let answer = dp(coins, amount, memorization);
    return  answer === Infinity ? -1 : answer;
};

function dp(coins: number[], currentAmount: number, memorization: number[]) {
    if (currentAmount === 0) {
        return 0;
    }
    if (currentAmount < 0) {
        return Infinity;
    }
    if (memorization[currentAmount] !== Infinity) {
        return memorization[currentAmount]
    }
    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
        min = Math.min(dp(coins, currentAmount-coins[i], memorization)+1, min);
    }
    memorization[currentAmount] = min
    return memorization[currentAmount]
}