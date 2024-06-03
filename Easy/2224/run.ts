/*
 * Runtime: 65 ms Beats 11.76% of users with TypeScript
 * Memory: 51.21 MB Beats 64.71% of users with TypeScript
 */
function convertTime(current: string, correct: string): number {
    const currentMins = calTotalMins(current)
    const correctMins = calTotalMins(correct)
    let diffMins: number = Math.abs(currentMins-correctMins)
    const minCategory = [60, 15, 5, 1]
    let index = 0
    let result = 0
    while (diffMins > 0) {
        if (diffMins >= minCategory[index]) {
            diffMins = diffMins - minCategory[index]
            result++
            continue
        }
        index++
    }
    return result
};


function calTotalMins(time: string): number {
    const hours = Number.parseInt(time.substring(0,2))
    const mins = Number.parseInt(time.substring(3))
    return hours*60 + mins
}