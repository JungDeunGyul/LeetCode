/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(1));
  const width = n;
  const length = m;

  for (let i = 1; i < length; i++) {
    for (let j = 1; j < width; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  const result = dp[length - 1][width - 1];

  return result;
};