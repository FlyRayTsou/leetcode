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
// Runtime: 112 ms, faster than 69.03% of TypeScript online submissions for Path Sum.
// Memory Usage: 47 MB, less than 54.48% of TypeScript online submissions for Path Sum.
 function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;
    return checkSum(root, targetSum, 0);
};

function checkSum(node: TreeNode | null, targetSum: number, curSum): boolean {
    if (node.left === null && node.right === null) {
        return targetSum === curSum+node.val;
    }
    let result = false;
    if (node.left !== null) {
        result = result || checkSum(node.left, targetSum, curSum+node.val)
    }
    if (node.right !== null) {
        result = result || checkSum(node.right, targetSum, curSum+node.val);   
    }
    return result;
}