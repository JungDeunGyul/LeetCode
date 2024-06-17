/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
  const result = [0, 1];
  
  if (n === 0) {
    return result[0];
  } else if (n === 1) {
    return result[1];
  }
  
  for (let i = 2; i <= n; i++){
    result.push(result[i - 2] + result[i - 1]);
  }
  
  return result[n];
};