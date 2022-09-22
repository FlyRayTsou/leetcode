// Runtime: 185 ms, faster than 42.99% of TypeScript online submissions for Add Two Numbers.
// Memory Usage: 47.7 MB, less than 90.99% of TypeScript online submissions for Add Two Numbers.
/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let curNode = new ListNode(0, null);
    const firstNode = curNode;
    let overNine = false;
    while (l1 !== null || l2 !== null) {
        let l1val = 0;
        let l2val = 0;
        if (l1 != null) {
            l1val = l1.val;
        }
        if (l2 != null) {
            l2val = l2.val;
        }
        let sum = l1val+l2val;
        if (overNine) {
            sum = sum + 1;
            overNine = false;
        }
        if (sum > 9) {
            overNine = true;
            sum = sum - 10;
        }
        curNode.val = sum;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

        if (l1 === null && l2 === null && overNine) {
            let nextNode = new ListNode(1, null);    
            overNine = false;
            curNode.next = nextNode;
            return firstNode;
        } else if (l1 === null && l2 === null && !overNine) {
            return firstNode;
        } else {
            if (l1 === null && l2 === null) {
                return firstNode;
            }
            let nextNode = new ListNode(0, null);
            curNode.next = nextNode;
            curNode = nextNode;
        }
    }
    return firstNode;
};