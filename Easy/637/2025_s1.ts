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

/*
 *Runtime 1 ms Beats 97.86%
 * Memory 61.58 MB Beats 28.27%
 */
function averageOfLevels(root: TreeNode | null): number[] {
    const sum: number[] = [];
    const nodeCount: number[] = [];
    calculateAvg(root, 0, sum, nodeCount);
    const result: number[] = [];
    for (let i = 0; i < sum.length; i++) {
        result[i] = sum[i]/nodeCount[i]
    }
    return result;
};

function calculateAvg(curNode: TreeNode | null, curLevel: number, sum: number[], nodeCount:number[]) {
    if (curNode === null) {
        return;
    }
    sum[curLevel] = sum[curLevel] === undefined ? curNode.val : sum[curLevel]+curNode.val;
    nodeCount[curLevel] = nodeCount[curLevel] === undefined ? 0 : nodeCount[curLevel]+1
    calculateAvg(curNode.left, curLevel+1, sum, nodeCount)
    calculateAvg(curNode.right, curLevel+1, sum, nodeCount)    
    return;
}