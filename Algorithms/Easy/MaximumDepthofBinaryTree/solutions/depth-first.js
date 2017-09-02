/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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
    return depth + Math.max(maxDepth(root.left), maxDepth(root.right));
};