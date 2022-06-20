/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    function run(slowNode, fastNode) {
        if (!fastNode || !fastNode.next) {
            return false;
        }
        
        if (slowNode === fastNode) {
            return true;
        }
        return run(slowNode.next, fastNode.next.next);
    }
    if (!head) {
        return false;
    }
    return run(head, head.next);
};