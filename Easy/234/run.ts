
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Runtime: 250 ms, faster than 43.85% of TypeScript online submissions for Palindrome Linked List.
// Memory Usage: 74.6 MB, less than 71.07% of TypeScript online submissions for Palindrome Linked List.
 function isPalindrome(head: ListNode | null): boolean {
    let fastNode = head;
    let slowNode = head;
    let stack: number[] = [];
    let result = true;
    if (head === null || head.next === null) {
        return result;
    }
    while(fastNode !== null && fastNode.next != null) {
          stack.push(slowNode.val);
          if (fastNode.next !== null) {
              fastNode = fastNode.next.next;
              slowNode = slowNode.next;
          }
    }
    if (fastNode !== null) {
        slowNode = slowNode.next;
    }
    while(slowNode !== null) {
        const curValue = stack.pop();
        if (slowNode.val !== curValue) {
            result = false;
            break;
        }
        slowNode = slowNode.next;
    }
    return result;
};