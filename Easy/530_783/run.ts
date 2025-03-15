// Brutal force
// tranverse all node and then calculate difference
// n: numbers of node 
// h: height of tree
// TC: O(n+n^2)
// MC: O(h+n)

// tranverse and memorize the minimum number
// because BST so we can just calculate the difference between node and two child.
// TC: O(n)
// MC: O(1)

// Edge case root node is null
// or only root node
// BST have duplicate value?
/* 
 * Runtime 63 ms Beats 39.58% of users with TypeScript
 * Memory 51.79 MB Beats 87.50% of users with TypeScript
 */
function minDiffInBST(root: TreeNode | null): number {
    if (root === null) return 0;
    let min = Infinity;
    const stack: (TreeNode | null)[] = []
    let curNode: TreeNode | null = root;
    let numberList: number[] = []
    let list: number[] = []
    while (stack.length > 0 || curNode !== null) {
        while (curNode !== null) {
            stack.push(curNode)
            curNode = curNode.left
        }
        curNode = stack.pop()
        list.push(curNode.val)
        curNode = curNode.right
    }
    for (let i = 1; i < list.length; i++) {
        let pre = list[i-1]
        let cur = list[i]
        min = Math.min(cur-pre, min)
    }
    return min
};