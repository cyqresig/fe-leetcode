# Solution

##1 常规解法

相邻的二个数不相等时，才会保留旧有指向

```js
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
```

### 复杂度分析

* 时间复杂度：O(n)
  
* 空间复杂度: O(1)