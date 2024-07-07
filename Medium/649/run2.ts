/*
 * Runtime 67 ms Beats 80.68%
 * Memory 54.84 MB Beats 26.09%
 * Ref: https://leetcode.com/problems/dota2-senate/solutions/3483399/simple-diagram-explanation/?envType=study-plan-v2&envId=leetcode-75
 */
function predictPartyVictory(senate: string): string {
    let queueR: number[] = [];
    let queueD: number[] = [];
    let senateNum: number = senate.length
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") {
            queueR.push(i)
            continue;
        }
        queueD.push(i)
    }
    while(queueR.length !== 0 && queueD.length !== 0) {
        let popR = queueR.shift()
        let popD = queueD.shift()
        if (popR < popD) {
            queueR.push(senateNum+popR)
            continue;
        }
        queueD.push(senateNum+popD)
    }
    return queueR.length === 0 ? "Dire" : "Radiant";
};