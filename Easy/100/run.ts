/**
 * Runtime: 50 ms Beats 89.01% of users with TypeScript
 * Memory: 51.45 MB Beats 70.47% of users with TypeScript
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    let result = true
    let pQueue = []
    let qQueue = []
    pQueue.push(p)
    qQueue.push(q)
    while(pQueue.length > 0 || qQueue.length > 0) {
        let pNode = pQueue.shift()
        let qNode = qQueue.shift()
        if (pNode.val !== qNode.val) {
            result = false
            break
        }
        if (pNode.left !== null && qNode.left !== null) {
            pQueue.push(pNode.left)
            qQueue.push(qNode.left)
        }
        if (pNode.right !== null && qNode.right !== null) {
            pQueue.push(pNode.right)
            qQueue.push(qNode.right)
        }
        if ((pNode.left !== null && qNode.left === null) || (pNode.left === null && qNode.left !== null)) {
            result = false
            break
        }
        if ((pNode.right !== null && qNode.right === null) || (pNode.right === null && qNode.right !== null)) {
            result = false
            break
        }
    }
    return result
};