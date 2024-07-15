/*
 * Runtime 66 ms Beats 33.08% 
 * Memory 52.37 MB Beats 28.04%
 */
function gcdOfStrings(str1: string, str2: string): string {
    const len1 = str1.length;
    const len2 = str2.length;
    let result = "";
    const factors = findCommonFactors(len1, len2);
    result = validateDivisor(str1, str2, factors)
    return result;
};

function findCommonFactors(len1: number, len2: number) {
    const result: number[] = [];
    const checkLength = len1 < len2 ? len1 : len2;
    for (let i = 1; i <= len1; i++) {
        if (Number.isInteger(len1/i) && Number.isInteger(len2/i)) {
            result.push(i)
        }
    }
    return result;
}

function validateDivisor(str1: string, str2: string, factors: number[]) {
    let result = "";
    for (let factor of factors) {
        let isSuccess = true;
        const divisor = str1.substring(0, factor)
        const divisorLen = divisor.length
        const str1Divide = str1.length/factor;
        const str2Divide = str2.length/factor;
        for (let i = 0; i < str1Divide; i++) {
            let compareString = str1.substring(divisorLen*i, divisorLen*(i+1))
            if (divisor !== compareString) {
                isSuccess = false;
                break;
            }
        }
        for (let i = 0; i < str2Divide; i++) {
            let compareString = str2.substring(divisorLen*i, divisorLen*(i+1))
            if (divisor !== compareString) {
                isSuccess = false;
                break;
            }
        }
        if (isSuccess) {
            result = divisor
        }
    }
    return result;
}
