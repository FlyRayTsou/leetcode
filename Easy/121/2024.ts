/*
 * Runtime 70 ms Beats 89.60%
 * Memory 59.92 MB Beats 27.53%
 */ 
function maxProfit(prices: number[]): number {
    let min: number = prices[0];
    let result: number = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > min) {
            result = Math.max(result, prices[i]-min)
        } else {
            min = prices[i]
        }
    }
    return result;
};

/* 
 * Runtime 73 ms Beats 82.51%
 * Memory 59.75 MB Beats 42.07%
 */
function maxProfit2(prices: number[]): number {
    let left: number = 0; // buy
    let right: number = 1; // sell
    let maxProfit: number = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right]-prices[left])
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};

