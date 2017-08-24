# Solution

## 递归解法

递归比较二颗树的相同位置上的节点

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true;
    } else if((p === null && q !== null) || (p !==null && q === null)) {
        return false
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

### 复杂度分析

* 时间复杂度：O(n)
n 为树节点个数
  
* 空间复杂度: O(logN)

