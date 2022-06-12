/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let uniqueArray = [...new Set(height)]
    let reverseHeight = height.slice().reverse();
    let result = 0;
    for (let i = 0; i < uniqueArray.length; i++) {
        const firstIndex = height.indexOf(uniqueArray[i]);
        const lastIndex = height.length - reverseHeight.findIndex(x => x >= uniqueArray[i]) - 1;
        
        result = result < (lastIndex-firstIndex)*uniqueArray[i]? (lastIndex-firstIndex)*uniqueArray[i] : result;
        const firstIndex2 = reverseHeight.indexOf(uniqueArray[i]);
        const lastIndex2 = height.length - height.findIndex(x => x >= uniqueArray[i]) - 1;

        result = result < (lastIndex2-firstIndex2)*uniqueArray[i]? (lastIndex2-firstIndex2)*uniqueArray[i] : result;
    }
    return result;
};