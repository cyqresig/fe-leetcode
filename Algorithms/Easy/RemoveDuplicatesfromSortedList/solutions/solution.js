/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var current, next;
    current = head;

    while(current) {
        next = current.next;
        if (next && next.val === current.val) {
            current.next = next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};