/*
 * Runtime 3 ms Beats 68.88%
 * Memory 63.25 MB Beats 7.75%
 */
function combinationSum(candidates: number[], target: number): number[][] {
    const answer: Set<number[]> = new Set();
    for (let i = 0; i < candidates.length; i++) {
        calSum(i, candidates, target-candidates[i], [candidates[i]], answer)
    }
    return Array.from(answer);
};

function calSum(startIndex: number, candidates: number[], target: number, answerItem: number[], answer: Set<number[]>) {
    if (target === 0) {
        answer.add(answerItem);
        return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
        if (target-candidates[i] < 0) continue;
        calSum(i, candidates, target-candidates[i], [...answerItem, candidates[i]], answer)
    }
    return;
}