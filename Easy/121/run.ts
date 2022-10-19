// Runtime: 117 ms, faster than 80.56% of TypeScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51.9 MB, less than 64.04% of TypeScript online submissions for Best Time to Buy and Sell Stock.
function maxProfit(prices: number[]): number {
    let min = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
            continue;
        }
        profit = Math.max(prices[i] - min, profit);
    }
    return profit;
};