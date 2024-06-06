/*
 * Time Limit Exceeded 
 * 14 / 28 testcases passed
 */
function change(amount: number, coins: number[]): number {
    if (amount === 0) return 1
    let answer: number[] = [0]
    coins.sort((a, b) => b-a)
    coinChange(amount, coins, 0, answer)
    return answer[0]
};

function coinChange(amount: number, coins: number[], currentIndex: number, answer: number[]) {
    if (amount === 0) {
        return true
    }
    if (amount < 0 ) {
        return false
    }
    for (let i = currentIndex; i < coins.length; i++) {
        if (coinChange(amount-coins[i], coins, i, answer)) {
            answer[0]++
            continue;
        }
    }
    return false
}