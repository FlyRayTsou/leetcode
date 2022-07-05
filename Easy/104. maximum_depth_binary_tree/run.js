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
 * @return {number}
 */
// Runtime: 71 ms, faster than 93.14% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 44.7 MB, less than 90.38% of JavaScript online submissions for Maximum Depth of Binary Tree.
 let max = 0;
 var maxDepth = function(root) {
     max = 0;
     if (root === null) {
         return max;
     }
     findDepth(root, 1);
     return max;
 };
 
 function findDepth(node, count) {
     if (node.left === null && node.right === null) {
         if (count > max) {
             max = count;
         }
     }
     if (node.left !== null) {
         findDepth(node.left, count+1);
     }
     if (node.right !== null) {
         findDepth(node.right, count+1);
     }
 }