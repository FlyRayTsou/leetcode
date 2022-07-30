/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// Runtime: 99 ms, faster than 64.46% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 44.6 MB, less than 56.67% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
var sortedArrayToBST = function(nums) {
    return createBST(nums, 0, nums.length-1);
};

function createBST(array, start, end) {
    if (end < start) {
        return null;
    }
    const mid = Math.ceil((start+end)/2);
    return new TreeNode(array[mid], createBST(array, start, mid-1), createBST(array, mid+1, end));
}