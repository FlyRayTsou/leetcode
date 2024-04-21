/*
 * Runtime 115 ms Beats 68.55% of users with TypeScript
 * Memory 54.95 MB Beats 98.18% of users with TypeScript
 */
function intToRoman(num: number): string {
    const numString = num.toString()
    const finalIndex = numString.length-1
    let result: string = ""
    for (let i = 0; i <= finalIndex; i++) {
        result = result + mappingRoman(numString[i], i, finalIndex)
    }
    return result
};

function mappingRoman(numAlpha: string, currentIndex: number, finalIndex: number): string {
    const unit = finalIndex - currentIndex; // how many zero
    if (unit === 0) {
        switch (numAlpha) {
            case "0":
                return ""
            case "1":
                return "I"
            case "2":
                return "II"
            case "3":
                return "III"
            case "4":
                return "IV"
            case "5":
                return "V"
            case "6":
                return "VI"
            case "7":
                return "VII"
            case "8":
                return "VIII"
            case "9":
                return "IX"
        }
    } else if (unit === 1) {
        switch (numAlpha) {
            case "0":
                return ""
            case "1":
                return "X"
            case "2":
                return "XX"
            case "3":
                return "XXX"
            case "4":
                return "XL"
            case "5":
                return "L"
            case "6":
                return "LX"
            case "7":
                return "LXX"
            case "8":
                return "LXXX"
            case "9":
                return "XC"
        }
    } else if (unit === 2) {
        switch (numAlpha) {
            case "0":
                return ""
            case "1":
                return "C"
            case "2":
                return "CC"
            case "3":
                return "CCC"
            case "4":
                return "CD"
            case "5":
                return "D"
            case "6":
                return "DC"
            case "7":
                return "DCC"
            case "8":
                return "DCCC"
            case "9":
                return "CM"
        }
    } else if (unit === 3) {
        switch (numAlpha) {
            case "1":
                return "M"
            case "2":
                return "MM"
            case "3":
                return "MMM"
        }
    }
}
