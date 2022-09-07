// Runtime: 128 ms, faster than 24.31% of TypeScript online submissions for Decode Ways.
// Memory Usage: 45.5 MB, less than 18.23% of TypeScript online submissions for Decode Ways.
function numDecodings(s: string): number {
    if (parseInt(s[0]) === 0) return 0;
    let memo: number[] = [];
    DP(s, memo);
    return memo[s];
};

function DP(s: string, memo: number[]) {
     if (parseInt(s[0]) === 0)  {
         memo[s] = 0;
         return 0;
     }
     if (s.length <= 1) {
        memo[s] = 1;
        return memo[s]
    }
     if (memo[s] !== undefined) return memo[s];
     if (parseInt(s[0]+s[1]) <= 26) {
       memo[s] = DP(s.substring(1), memo) + DP(s.substring(2), memo);
       return memo[s] ;
     } else {
         memo[s] = DP(s.substring(1), memo);
         return memo[s]
     }
}
