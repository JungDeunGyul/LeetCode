/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
const distributeCandies = function(n, limit) {
  let count = 0;

  function dfs(remaining, children) {
    if (children === 2) {
      if (remaining >= 0 && remaining <= limit) {
        count++;
      }
      return;
    }

    for (let i = 0; i <= Math.min(remaining, limit); i++) {
      dfs(remaining - i, children + 1);
    }
  }

  dfs(n, 0);
  
  return count;
};