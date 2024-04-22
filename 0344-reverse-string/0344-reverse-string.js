/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  const result = [];
  const sArrayLength = s.length;
  
  for (let i = sArrayLength - 1; i >= 0; i--) {
    result.push(s[i]);
  }
  
  for (let i = 0; i < sArrayLength; i++) {
    s[i] = result[i];
  }
};