// Runtime: 209 ms, faster than 5.16% of TypeScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 48.7 MB, less than 8.51% of TypeScript online submissions for Remove Nth Node From End of List.
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let firstNode = head;
    let curNode = head;
    let stack = [];
    let count = 0;
    while(curNode != null) {
        stack.push(curNode);
        count++;
        curNode = curNode.next;
    }
    if (n === 1 && count === 1) return null;
    if (n === 1) {
        stack.pop();
        curNode = stack.pop();
        curNode.next = null;
        return firstNode;
    }
    if (n === count) return firstNode.next;
    let backCount = 0;
    let nextNode = curNode;
    while(backCount <= n) {
        curNode = stack.pop();
        backCount++;
        console.log(curNode);
        if (backCount === n-1) {
            console.log({nextNode});
            nextNode = curNode;
        }
        if (backCount === n+1) {
            let beforeNode = curNode;
            beforeNode.next = nextNode;
            console.log({beforeNode});
        }
    }
    return firstNode;
};