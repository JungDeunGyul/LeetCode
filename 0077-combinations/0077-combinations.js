/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const result = [];
  
  function getCombine(start, bucket) {
    if (bucket.length === k) {
      result.push([...bucket]);
      
      return;
    }
    
    for (let i = start; i <= n; i++) {
      bucket.push(i);
      
      getCombine(i + 1, bucket);
      
      bucket.pop();
    }
  }
  
  getCombine(1, []);
  
  return result;
};