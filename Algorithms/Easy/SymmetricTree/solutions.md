# Solution

##1 递归

左分支值 = 右分支值


```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    else if ( (root.left === null && root.right !== null) || (root.left !== null && root.right === null) ) {
        return false;
    }
    else if (root.left === null && root.right === null) {
        return true;
    }
    else if (root.left.val !== root.right.val) {
        return false;
    }
    return getTreeValue(root.left, true) === getTreeValue(root.right, false);
};

function getTreeValue(node, left) {
    var value = '';
    if (node == null) {
        return value;
    }
    var nodeLeft = node.left;
    var nodeRight = node.right;
    var nodeLeftVal = nodeLeft == null ? 'null' : node.left.val;
    var nodeRightVal = nodeRight == null ? 'null' : node.right.val;
    value += left ? ('' + nodeLeftVal + nodeRightVal) : ('' + nodeRightVal + nodeLeftVal);
    return value + getTreeValue(left? nodeLeft: nodeRight, left) +  getTreeValue(left? nodeRight : nodeLeft, !left);
}

```
### 复杂度分析

* 时间复杂度：O(n - 1)
  
* 空间复杂度: O(1)

