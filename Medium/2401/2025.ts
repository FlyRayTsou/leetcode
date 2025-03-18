/* 
 * Runtime 1175 ms Beats 7.69%
 * Memory 72.86 MB Beats 7.69%
 */
function longestNiceSubarray(nums: number[]): number {
    const hashMap: Map<number, boolean> = new Map<number, boolean>();
    let left = 0;
    let right = 0;
    let result = 1;
    while(right < nums.length) {
        const binaryString = convertNumToBinary(nums[right])
        const oneArray = convertStringToPosition(binaryString);
        let isOKAdd = true
        for (let i = 0; i < oneArray.length; i++) {
            if (hashMap.has(oneArray[i])) {
                isOKAdd = false
                break;
            }
        }
        if (isOKAdd) {
            result = Math.max(result, right-left+1)
            right++;
            for (let i = 0; i < oneArray.length; i++) {
                hashMap.set(oneArray[i], true);
            }
            continue;
        } else {
            const binaryStringLeft = convertNumToBinary(nums[left])
            const oneArrayLeft = convertStringToPosition(binaryStringLeft);
            for (let i = 0; i < oneArrayLeft.length; i++) {
                hashMap.delete(oneArrayLeft[i])
            }
            left++            
        }
        
    }
    return result;
}
function convertStringToPosition(str: string): number[] {
    const result: number[] = []
    for (let i = str.length-1; i >= 0; i--) {
        if (str[i] === "1") {
            result.push(str.length-1-i)
        }
    }
    return result;
}
  
function convertNumToBinary(num: number): string {
    return num.toString(2);
}