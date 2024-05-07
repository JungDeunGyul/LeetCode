/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
  const result = n > 0 && Math.log2(n) % 2 === 0;
  
  return result;
};