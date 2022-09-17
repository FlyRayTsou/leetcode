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

// Runtime: 142 ms, faster than 25.10% of TypeScript online submissions for Kth Smallest Element in a BST.
// Memory Usage: 50.1 MB, less than 22.22% of TypeScript online submissions for Kth Smallest Element in a BST.
function kthSmallest(root: TreeNode | null, k: number): number {
    let result:number[] = [];
    let stack:TreeNode[] = [];
    let curNode: TreeNode | null = root;
    while(curNode !== null || stack.length > 0) {
        if (curNode !== null) {
            stack.push(curNode);
            curNode = curNode.left;
        } else  {
            curNode = stack.pop();
            result.push(curNode.val);
            curNode = curNode.right;
        }
        // Runtime: 136 ms, faster than 32.51% of TypeScript online submissions for Kth Smallest Element in a BST.
        // Memory Usage: 48.8 MB, less than 74.49% of TypeScript online submissions for Kth Smallest Element in a BST.
        if (result.length === k) {
            break;
        }
    }
    return result[k-1];
};