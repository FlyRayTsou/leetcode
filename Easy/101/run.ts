class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


 function isSymmetric(root: TreeNode | null): boolean {
    return checkSymmetric(root.left, root.right);
};

function checkSymmetric(leftNode: TreeNode | null, rightNode: TreeNode | null) {
    const leftVal = leftNode !== null ? leftNode.val : null;
    const rightVal = rightNode !== null ? rightNode.val : null;
    if (leftVal !== rightVal) return false;
    if (leftVal === null && rightVal === null) return true;
    return checkSymmetric(leftNode.left, rightNode.right) && checkSymmetric(leftNode.right, rightNode.left);
}