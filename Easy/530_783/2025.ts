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
 * Runtime 1 ms Beats 87.40%
 * Memory 60.79 MB Beats 41.92%
 */
function getMinimumDifference(root: TreeNode | null): number {
    return Math.min(
        dfs(root.left, Number.MAX_VALUE, Number.NEGATIVE_INFINITY, root.val),
        dfs(root.right, Number.MAX_VALUE, root.val, Number.POSITIVE_INFINITY)
    )
};

function dfs(curNode: TreeNode | null, curMin: number, closestLeft: number, closestRight: number) {
    if (curNode === null) {
        return curMin;
    }
    curMin = Math.min(curNode.val-closestLeft, closestRight-curNode.val);
    return Math.min(
        dfs(curNode.left, curMin, closestLeft, Math.min(curNode.val, closestRight)),
        dfs(curNode.right, curMin, Math.max(curNode.val, closestLeft), closestRight)
    )
}