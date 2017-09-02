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