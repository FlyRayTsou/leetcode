/*
 * Runtime: 305 ms Beats 29.83% of users with TypeScript
 * Memory: 67.56 MB Beats 30.67% of users with TypeScript
 */
function openLock(deadends: string[], target: string): number {
    const deadendsSet = new Set(deadends)
    const seen: Set<string> = new Set()
    let queue:[string, number][] = [["0000", 0]]

    while (queue.length > 0) {
        if(queue.length === 0) break
        let curr: [string, number] = queue.shift()
        if (curr[0] === target) return curr[1]
        if (deadendsSet.has(curr[0])) continue
        if (seen.has(curr[0])) continue
        seen.add(curr[0])
        queue = addNextNodes(curr, queue)
    }
    return -1
};

function addNextNodes(curr, queue) {
    let currentNode = curr[0]
    let currentCount = curr[1]
    let digit1 = Number.parseInt(currentNode[0])
    let digit2 = Number.parseInt(currentNode[1])
    let digit3 = Number.parseInt(currentNode[2])
    let digit4 = Number.parseInt(currentNode[3])
    queue.push([((digit1+1)%10).toString()+digit2.toString()+digit3.toString()+digit4.toString(), currentCount+1])
    queue.push([digit1.toString()+((digit2+1)%10).toString()+digit3.toString()+digit4.toString(), currentCount+1])
    queue.push([digit1.toString()+digit2.toString()+((digit3+1)%10).toString()+digit4.toString(), currentCount+1])
    queue.push([digit1.toString()+digit2.toString()+digit3.toString()+((digit4+1)%10).toString(), currentCount+1])
    queue.push([((digit1+9)%10).toString()+digit2.toString()+digit3.toString()+digit4.toString(), currentCount+1])
    queue.push([digit1.toString()+((digit2+9)%10).toString()+digit3.toString()+digit4.toString(), currentCount+1])
    queue.push([digit1.toString()+digit2.toString()+((digit3+9)%10).toString()+digit4.toString(), currentCount+1])
    queue.push([digit1.toString()+digit2.toString()+digit3.toString()+((digit4+9)%10).toString(), currentCount+1])
    return queue
}