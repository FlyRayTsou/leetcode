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
 * Runtime 6 ms Beats 24.47%
 * Memory 61.13 MB Beats 38.24%
 * Reference: https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/105131/a-good-problem-to-practice-bfs-dfs/
 */

function averageOfLevels(root: TreeNode | null): number[] {
    const queue: TreeNode[] = [root];
    const sum: number[] = [];
    const result: number[] = [];
    let curLevel = -1;
    while(queue.length > 0) {
        const curLevelCount = queue.length;
        curLevel += 1; 
        for(let i = 0; i < curLevelCount; i++) {
            const curNode = queue.shift();
            sum[curLevel] = sum[curLevel] === undefined ? curNode.val : sum[curLevel] + curNode.val;
            if (curNode.left !== null) queue.push(curNode.left);
            if (curNode.right !== null) queue.push(curNode.right);
        }
        result[curLevel] = sum[curLevel]/curLevelCount;
    }
    return result;
};