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
 * Runtime 0 ms Beats 100.00% 
 * Memory 59.86 MB Beats 34.70%
 * Reference: https://www.youtube.com/watch?v=s6ATEkipzow
 */
function isValidBST(root: TreeNode | null): boolean {
    return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};

function valid(node: TreeNode | null, leftBoundary: number, rightBoundary: number) {
    if (node === null) {
        return true;
    }
    if (node.val <= leftBoundary || node.val >= rightBoundary) {
        return false
    }
    return valid(node.left, leftBoundary, node.val) && valid(node.right, node.val, rightBoundary)
}