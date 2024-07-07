/*
 * Runtime 74 ms Beats 60.39%, AI Analyze Complexity O(n)
 * Memory 57.14 MB Beats 6.76%
 */
function predictPartyVictory(senate: string): string {
    let current = ""
    let banRightR = 0;
    let banRightD = 0;
    let remainR = 0;
    let remainD = 0;
    let newSenate = "";
    let isContinue = true;
    while(isContinue) {
        newSenate = "";
        for (let i = 0; i < senate.length; i++) {
            current = senate[i]
            
            if (current === "D") {
                if (banRightR > 0) {
                    banRightR--
                    newSenate += "X"
                } else {
                    banRightD++
                    remainD++
                    newSenate += current
                }
            } else if (current === "R") {
                if (banRightD > 0) {
                    banRightD--
                    newSenate += "X"
                } else {
                    banRightR++
                    remainR++
                    newSenate += current
                }
            } else if (current === "X") {
                newSenate += "X"
            }
            if (i === senate.length-1) {
                if (remainR === 0 || remainD === 0) {
                    isContinue = false
                    break;
                }
                remainR = 0
                remainD = 0
            }
        }
        senate = newSenate
    }
    return remainR === 0 ? "Dire" : "Radiant";
};