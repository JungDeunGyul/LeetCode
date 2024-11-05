/**
 * @param {string} s
 * @return {number}
 */
const minChanges = function(s) {
  let flipCount = 0;

  for (let i = 1; i < s.length; i += 2) {
    if (s[i] !== s[i - 1]) {
      flipCount++; 
    }
  }
  
  return flipCount;
};