/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = function(root) {
  let maxDepth = 0;
  let sumDeepestLeaves = 0;
  
  function dfs(node, depth) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        sumDeepestLeaves = node.val;
      } else if (depth === maxDepth) {
        sumDeepestLeaves += node.val;
      }
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
  
  dfs(root, 0);
  
  return sumDeepestLeaves;
};