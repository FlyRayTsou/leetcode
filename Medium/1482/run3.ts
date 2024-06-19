/*
 * Runtime 117 ms Beats 20.00% 
 * Memory 61.89 MB Beats 20.00%
 */
function minDays(bloomDay: number[], m: number, k: number): number {
    if (bloomDay.length < m*k) return -1;
    let start = 0;
    let end = Math.max(...bloomDay);
    let min = -1;
    while (start <= end) {
        let mid = Math.floor((start+end)/2);
        let adjacentCount = 0
        let bouquetsCount = 0;
        console.log("open: ", start, end, mid)
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                adjacentCount = adjacentCount+1
            } else {
                adjacentCount = 0
            }
             
            if (adjacentCount === k) {
                bouquetsCount++
                adjacentCount = 0;
            }
        }
        if (bouquetsCount >= m) {
            min = mid;
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return min
};