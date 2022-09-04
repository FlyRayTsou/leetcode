function numberOfWays(startPos: number, endPos: number, k: number): number {
    let memo:number[][] = [];
    const curDistance = Math.abs(endPos-startPos);
    DP(curDistance, k, memo);
    return memo[curDistance][k];
};

function DP(curDistance: number, k: number, memo: number[][]) {
    if (memo[curDistance] === undefined) {
        memo[curDistance] = []
    }
    if (memo[curDistance][k] !== undefined) {
        return memo[curDistance][k];
    }
    if (curDistance === 0 && k === 0) {
        memo[curDistance][k] = 1;
        return 1;
    }
    if (curDistance !== 0 && k === 0) {
        memo[curDistance][k] = 0;
        return 0;
    }
    const nextDistance1 = curDistance+1;
    const nextDistance2 = curDistance-1 < 0 ? 1 : curDistance-1;
    memo[curDistance][k] = (DP(nextDistance1, k-1, memo) + DP(nextDistance2, k-1, memo)) % (10**9+7) ;
    return memo[curDistance][k];
}