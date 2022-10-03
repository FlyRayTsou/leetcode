// Runtime: 191 ms, faster than 13.28% of TypeScript online submissions for Sqrt(x).
// Memory Usage: 45 MB, less than 49.25% of TypeScript online submissions for Sqrt(x).
function mySqrt(x: number): number {
    if (x === 0) return 0;
    if (x <= 3) return 1;
    let upBound = 1;
    let lowBound = 1;
    while(upBound ** 2 < x) {
        upBound = upBound*2
    }
    lowBound = upBound/2;
    if (upBound ** 2 === x) return upBound;
    while (lowBound<=upBound) {
        if (lowBound ** 2 < x) {
            lowBound++;
        } else {
            lowBound = lowBound ** 2 === x ? lowBound : lowBound-1;
            break;
        }
    }
    return lowBound;
};

// Runtime: 138 ms, faster than 48.95% of TypeScript online submissions for Sqrt(x).
// Memory Usage: 45.1 MB, less than 36.13% of TypeScript online submissions for Sqrt(x).
function mySqrt2(x: number): number {
    return bs(0, Math.ceil(x/2), x);
};

function bs(l: number, h: number, x: number): number {
    let mid = Math.floor((l + h)/2);
    if (mid ** 2 === x) return mid;
    if (l>h) return h;
    if (mid ** 2 > x) {
        return bs(l, mid-1, x);
    } else (mid ** 2 < x) {
        return bs(mid+1, h, x);
    }
}