/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Runtime: 71 ms, faster than 95.99% of TypeScript online submissions for Reverse Linked List.
// Memory Usage: 45.6 MB, less than 8.28% of TypeScript online submissions for Reverse Linked List.
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return head;
    let answer = null;
    return reverse(null, head, answer);
};

function reverse(preNode:ListNode, curNode: ListNode, answer: ListNode | null) {
    if (curNode.next === null) {
        curNode.next = preNode;
        answer = curNode;
        return answer;
    }
    const result = reverse(curNode, curNode.next, answer);
    curNode.next = preNode;
    return result;
}


// Runtime: 102 ms, faster than 60.41% of TypeScript online submissions for Reverse Linked List.
// Memory Usage: 44.7 MB, less than 87.15% of TypeScript online submissions for Reverse Linked List.
function reverseListIterate(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
    let stack = [];
    let pushNode = head;
    while(pushNode !== null) {
        stack.push(pushNode.val)
        pushNode = pushNode.next;
    }
    const curValue = stack.pop();
    let curNode = new ListNode(curValue, null);
    const answer = curNode;
    while(stack.length > 0) {
        const nextNodeValue = stack.pop();
        const nextNode = new ListNode(nextNodeValue, null);
        curNode.next = nextNode;
        curNode = nextNode;
    }
    return answer;
};