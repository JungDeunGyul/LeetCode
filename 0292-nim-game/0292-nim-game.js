/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
  const result = n % 4 !== 0;
  
  return result;
};