/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let nodeStack = [];
    let result = [];
    while(root != null || nodeStack.length !== 0) {
        if (root != null) {
            nodeStack.push(root);
            root = root.left;
        } else {
            root = nodeStack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    return result;    
};