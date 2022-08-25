
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


// BFS
 function rightSideView(root: TreeNode | null): number[] {
    let result = [];
    if (root === null) return result;
    let nodeQueue:TreeNode[] = [root];
    let tmpNodeQueue:TreeNode[] = [];
    nodeQueue.push(root);
    while (nodeQueue.length > 0) {
        const rightestNode = nodeQueue.shift();
        result.push(rightestNode.val);
        if (rightestNode.right != null) tmpNodeQueue.push(rightestNode.right);
        if (rightestNode.left != null) tmpNodeQueue.push(rightestNode.left);
        while (nodeQueue.length > 0) {
            const leftNode = nodeQueue.shift();
            if (leftNode.right != null) tmpNodeQueue.push(leftNode.right);
            if (leftNode.left != null) tmpNodeQueue.push(leftNode.left);
        }
        nodeQueue = tmpNodeQueue;
        tmpNodeQueue = [];
    }
    return result;
};

// DFS