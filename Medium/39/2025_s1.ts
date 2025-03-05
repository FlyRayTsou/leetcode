/*
 * Runtime 10 ms Beats 24.92%
 * Memory 64.69 MB Beats 5.98%
 */
function combinationSum(candidates: number[], target: number): number[][] {
    const answer: Set<number[]> = new Set();
    for (let i = 0; i < candidates.length; i++) {
        calSum(i, candidates, target-candidates[i], [candidates[i]], answer)
    }
    return Array.from(answer);
};

function calSum(startIndex: number, candidates: number[], target: number, answerItem: number[], answer: Set<number[]>) {
    if (target < 0) return;
    if (target === 0) {
        answer.add(answerItem);
        return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
        calSum(i, candidates, target-candidates[i], [...answerItem, candidates[i]], answer)
    }
    return;
}
