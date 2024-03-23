/*
 * Runtime: 66 ms Beats 7.69% of users with TypeScript
 * Memory: 51.37 MB Beats 12.31% of users with TypeScript
 */

// T: O(n+?)
// M: O(n) + runtimeM(?)
let calculateResult: boolean[] = []
function divisorGame(n: number): boolean {
    calculateResult[1] = false
    calculateResult[2] = true
    calculateResult[3] = false
    const factors = findFactors(n)
    let result = false;
    for (let i = 0; i < factors.length; i++) {
        if (result) break;
        if (calculateResult[n-factors[i]] !== undefined) {
            result = result || !calculateResult[n-factors[i]]
            continue;
        }
        calculateResult[n-factors[i]] = divisorGame(n-factors[i])
        result = result || !calculateResult[n-factors[i]]

    }
    return result;
};

function findFactors(n: number): number[] {
    let factors = []
    for (let i = 0; i < n; i++) {
        if (n % i == 0) factors.push(i)
    }
    return factors
}