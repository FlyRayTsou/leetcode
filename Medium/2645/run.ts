// ac
// *
//. * +1
//.  * +0
// b
// compareLetter: a  -> change only and also +1
// wordLetter: b -> keep
// compareLetter: b
// wordLetter: b -> move to next 
// compareLetter: c -> end and also + 1
// wordLetter: null
//* +1
// 
//. *
// a. a. a
//  
// compareLetter: a
// wordLetter: a
// compareLetter: b -> change only and also +1
// wordLetter: a -> keep
// TC: O(word.length*3)
// MC: O(1)
// cba

// compareLetter a
// wordLetter c
// different 
// add count 1
// change compareletter

// compareLetter b
// wordLetter c
// different 
// add count 1
// change compareletter

// compareLetter c
// wordLetter c
// same
// change compareletter
// change wordletter

// compareLetter a
// wordLetter a
// same
// end 
// count + 2 or +1 +0
/*
 * Runtime 80 ms Beats 75.00% 
 * Memory 54.28 MB Beats 75.00%
 * https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422183/concise-easy-to-understand-c-intutive-approach/
 */

function addMinimum(word: string): number {
    let validPattern = "abc"
    let curCompareIndex = 0
    let curIndex = 0;
    let result = 0;
    while(curIndex < word.length) {
        if (validPattern[curCompareIndex] === word[curIndex]) {
            curCompareIndex = (curCompareIndex + 1) % 3;
            curIndex++;
            continue;
        }
        curCompareIndex = (curCompareIndex + 1) % 3;
        result++;
    }
    result = result + adjustFinal(curCompareIndex);
    return result
};

function adjustFinal(curCompareIndex: number): number {
    switch (curCompareIndex) {
        case 0:
            return 0;
        case 1:
            return 2;
        case 2:
            return 1;
    }
}