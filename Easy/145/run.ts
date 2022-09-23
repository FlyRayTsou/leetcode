// Runtime: 103 ms, faster than 49.29% of TypeScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 44.1 MB, less than 81.22% of TypeScript online submissions for Binary Tree Postorder Traversal.
function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    postorder(root, result);
    return result;
};

function postorder(node: TreeNode | null, result: number[]) {
    if (node != null) {
        postorder(node.left, result);
        postorder(node.right, result);
        result.push(node.val);
    }
}