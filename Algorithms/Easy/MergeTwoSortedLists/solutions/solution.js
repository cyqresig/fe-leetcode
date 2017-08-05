/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    var newListNode = new ListNode();
    var listNode1 = l1;
    var listNode2 = l2;
    while(listNode1 && listNode2) {
        if (listNode1.val < listNode2.val) {
            newListNode.next = listNode1;
            listNode1 = listNode1.next;

        } else {
            newListNode.next = listNode2;
            listNode2 = listNode2.next;
        }
        newListNode = newListNode.next;
    }
    newListNode.next = listNode1 ? listNode1 : listNode2;    // 链表的最后一项的next必须是null，这里listNode1, listNode2至少会有一项是null
    return newListNode.next;
};