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

// BFS
// Runtime: 139 ms, faster than 17.91% of TypeScript online submissions for Path Sum.
// Memory Usage: 47.3 MB, less than 14.93% of TypeScript online submissions for Path Sum.
function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;
    let queue = [root];
    let valQueue = [root.val];
    let result = false;
    while(queue.length > 0) {
        let popNode = queue.shift();
        let popVal = valQueue.shift();
        if (popNode.left === null && popNode.right === null) {
            if (popVal === targetSum) {
                result = true;
                break;
            }
        }
        if (popNode.left !== null) {
            queue.push(popNode.left);
            valQueue.push(popVal + popNode.left.val);
        }
        if (popNode.right !== null) {
            queue.push(popNode.right);
            valQueue.push(popVal + popNode.right.val);
        }   
    }
    return result;
};