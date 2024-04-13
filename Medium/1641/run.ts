/*
 * Solution 2
 * Runtime: 2338 ms Beats 6.25% of users with TypeScript
 * Memory: 95.24 MB Beats 6.25% of users with TypeScript
 */
function countVowelStrings2(n: number): number {
    if (n == 1) return 5;
    let currentArray = ["a", "e", "i", "o", "u"]
    for (let i = 2; i <= n; i++) {
        currentArray = genVowelArray(currentArray)
    }
    return currentArray.length;
};

function genVowelArray(currentArray: string[]) {
    let newArray: string[] = []
    for (let i = 0 ; i < currentArray.length; i++) {
        switch (currentArray[i][currentArray[i].length-1]) {
            case "a":
                newArray.push(currentArray[i][currentArray[i].length-1]+"a")
                newArray.push(currentArray[i][currentArray[i].length-1]+"e")
                newArray.push(currentArray[i][currentArray[i].length-1]+"i")
                newArray.push(currentArray[i][currentArray[i].length-1]+"o")
                newArray.push(currentArray[i][currentArray[i].length-1]+"u")
                break;
            case "e":
                newArray.push(currentArray[i][currentArray[i].length-1]+"e")
                newArray.push(currentArray[i][currentArray[i].length-1]+"i")
                newArray.push(currentArray[i][currentArray[i].length-1]+"o")
                newArray.push(currentArray[i][currentArray[i].length-1]+"u")
                break;
            case "i":
                newArray.push(currentArray[i][currentArray[i].length-1]+"i")
                newArray.push(currentArray[i][currentArray[i].length-1]+"o")
                newArray.push(currentArray[i][currentArray[i].length-1]+"u")
                break;
            case "o":
                newArray.push(currentArray[i][currentArray[i].length-1]+"o")
                newArray.push(currentArray[i][currentArray[i].length-1]+"u")
                break;
            case "u":
                newArray.push(currentArray[i][currentArray[i].length-1]+"u")
                break;
        }
    }
    return newArray
}