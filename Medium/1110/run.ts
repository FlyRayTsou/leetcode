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
 * Runtime 81 ms Beats 84.62%
 * Memory 59.10 MB Beats 19.23%
 */
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    if (root === null) return [];
    if (to_delete.length === 0) return [root];

    let queueA = [root];
    let result = [];
    while (queueA.length> 0) {//Line 21: Char 25: error TS1005: ';' expected.
      const nodeItem = queueA.shift();
      const nodeItemIndex = to_delete.indexOf(nodeItem.val);
        if (nodeItemIndex !== -1) {
            if (nodeItem.left !== null) {
                queueA.push(nodeItem.left);
                if (to_delete.indexOf(nodeItem.left.val) === -1) {
                    result.push(nodeItem.left);
              }
          }
          if (nodeItem.right !== null) {
                queueA.push(nodeItem.right);
                if (to_delete.indexOf(nodeItem.right.val) === -1) {
                    result.push(nodeItem.right);
              }
          }
      } else {
            if (nodeItem.left !== null) {
                queueA.push(nodeItem.left);
                if (to_delete.indexOf(nodeItem.left.val) !== -1) {
                  nodeItem.left = null;
              }
          }
          if (nodeItem.right !== null) {
                queueA.push(nodeItem.right);
                if (to_delete.indexOf(nodeItem.right.val) !== -1) {
                  nodeItem.right = null;
              }
          }
      }
  }

  return to_delete.indexOf(root.val) === -1 ? [...result, root]:result;
};