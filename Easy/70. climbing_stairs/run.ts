/*
n=44 Runtime: 6657 ms
n=45 Time Limit Exceeded

function climbStairs(n: number): number {
    return remainSteps(n);
};

function remainSteps(leftSteps: number): number {
    if (leftSteps === 1) {
        return 1;
    }
    if (leftSteps === 2) {
        return 2;
    }
    return remainSteps(leftSteps-1) + remainSteps(leftSteps-2)
}
*/



// Runtime: 100 ms, faster than 40.50% of TypeScript online submissions for Climbing Stairs.
// Memory Usage: 42.4 MB, less than 88.59% of TypeScript online submissions for Climbing Stairs.
function climbStairs(n: number): number {
    let memo: number[] = new Array(46).fill(0);
    return remainSteps(n, memo);
};

function remainSteps(leftSteps: number, memo: number[]): number {
    if (leftSteps === 1) {
        memo[1] = 1;
    }
    if (leftSteps === 2) {
        memo[2] = 2;
    }
    if (memo[leftSteps] === 0) {
        memo[leftSteps] = remainSteps(leftSteps-1, memo) + remainSteps(leftSteps-2, memo)    
    }
    return memo[leftSteps];
}


