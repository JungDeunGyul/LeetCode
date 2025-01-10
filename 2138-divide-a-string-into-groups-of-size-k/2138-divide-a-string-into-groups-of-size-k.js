/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = function(s, k, fill) {
  const result = [];

  for (let i = 0; i < s.length; i += k) {
    result.push(s.slice(i, i + k));
    
  }
  
  const lastString = result[result.length - 1];
  
  if (lastString.length < k) {
    result[result.length - 1] = lastString + fill.repeat(k - lastString.length);
  }
  
  return result;
};
