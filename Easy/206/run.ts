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

// Runtime: 127 ms, faster than 17.11% of TypeScript online submissions for Reverse Linked List.
// Memory Usage: 45.3 MB, less than 38.97% of TypeScript online submissions for Reverse Linked List.
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
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