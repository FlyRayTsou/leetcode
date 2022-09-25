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

// Runtime: 77 ms, faster than 80.61% of TypeScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 44.8 MB, less than 28.52% of TypeScript online submissions for Binary Tree Preorder Traversal.
function iteratePreorder(root: TreeNode | null): number[] {
    let result = [];
    let stack = [];
    let curNode = root;
    while (curNode !== null || stack.length > 0) {
        if (curNode !== null) {
            result.push(curNode.val);
            if (curNode.right !== null) {
                stack.push(curNode.right);    
            }
            curNode = curNode.left;            
        } else {
            const popNode = stack.pop();
            curNode = popNode;
        }
    }
    return result;
}