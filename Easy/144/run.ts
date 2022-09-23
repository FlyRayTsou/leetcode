// Runtime: 115 ms, faster than 25.48% of TypeScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 43 MB, less than 99.24% of TypeScript online submissions for Binary Tree Preorder Traversal.
function preorderTraversal(root: TreeNode | null): number[] {
    let result = [];
    preorder(root, result);
    return result;
};

function preorder(node: TreeNode | null, result: number[]) {
    if (node !== null) {
        result.push(node.val);
        preorder(node.left, result);
        preorder(node.right, result);
    }
}