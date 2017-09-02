# 深度优先

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth = 0;
    var left = null;
    var right = null;
    if (root === null) {
        return depth;
    }  else {
        depth++;
        left = root.left;
        right = root.right;
    }
    return depth + Math.max(maxDepth(left), maxDepth(right));
};
```

### 复杂度分析

* 时间复杂度：O(n)

n为节点数量
  
* 空间复杂度: O(1)

# 广度优先

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth = 0;
    var queue = [];
    var i, len;
    if (root === null) {
        return depth;
    }
    queue.push(root);
    while(queue.length !== 0) {
        depth++;
        len = queue.length;
        for(i = 0; i < len; i++) {
            var treeNode = queue[i];
            if(treeNode.left !== null)
                queue.push(treeNode.left);
            if(treeNode.right !== null)
                queue.push(treeNode.right);
        }
        queue = queue.slice(len);
    }
    return depth;
};
```

### 复杂度分析

* 时间复杂度：O(n)

n为节点数量
  
* 空间复杂度: O(?)



