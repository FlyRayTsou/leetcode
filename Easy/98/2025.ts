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
 * Runtime 1 ms Beats 74.54%
 * Memory 61.08 MB Beats 10.68%
 */
function isValidBST(root: TreeNode | null): boolean {
    const result: number[] = [];
    let validStatus: boolean = true;
    traversalInorder(root, result)
    for (let i = 1; i < result.length; i++) {
        if (result[i-1] >= result[i]) {
            validStatus = false;
            break;
        }
    }
    return validStatus
};

function traversalInorder(node: TreeNode, result: number[]) {
    if (node.left != null) {
        traversalInorder(node.left, result)
    }
    result.push(node.val)
    if (node.right != null) {
        traversalInorder(node.right, result)
    }
}