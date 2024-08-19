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
 * @return {boolean}
 */
const isBalanced = function(root) {
  let isTreeBalanced = true;
  
  function dfs(node) {
    if (!node) {
      return 0;
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    if (Math.abs(left - right) > 1) {
      isTreeBalanced = false; 
    }
    
    return Math.max(left, right) + 1;
  }
  
  dfs(root);
  
  return isTreeBalanced;
};