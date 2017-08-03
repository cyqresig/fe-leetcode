# Solution

具体思想就是新建一个链表，然后比较两个链表中的元素值，
优先把较小的那个链到新链表中，由于两个输入链表的长度可能不同，
所以最终会有一个链表先完成插入所有元素，则直接另一个未完成的链表直接链入新链表的末尾。

```js
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
```
### 复杂度分析

* 时间复杂度：O(n)

  n 短的链表的长度
  
* 空间复杂度: O(1)

