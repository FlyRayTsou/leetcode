/*
 * Runtime 190 ms Beats 14.50% Analyze Complexity O(N*K)
 * Memory 56.28 MB Beats 11.90%
 */
function findTheWinner(n: number, k: number): number {
    const queue: number[] = [];
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }
    while(queue.length > 1) {
        for (let i = 1; i <= k-1; i++) {
            let popItem = queue.shift()
            queue.push(popItem)
        }
        queue.shift()
    }
    return queue[0]
};