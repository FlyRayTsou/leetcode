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

// Runtime: 105 ms, faster than 44.72% of TypeScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 44.3 MB, less than 62.79% of TypeScript online submissions for Binary Tree Inorder Traversal.
function inorderTraversal(root: TreeNode | null): number[] {
    let result = [];
    inorder(root, result);
    return result;
};

function inorder(node: TreeNode | null, result: number[]) {
    if (node !== null) {
        inorder(node.left, result);
        result.push(node.val);
        inorder(node.right, result);
    }
}