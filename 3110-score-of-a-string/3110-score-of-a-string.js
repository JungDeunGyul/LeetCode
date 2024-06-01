/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function(s) {
  const sLength = s.length;
  let sumAsc = 0;
  
  for (let i = 0; i < sLength - 1; i++) {
    sumAsc += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }
  
  const result = sumAsc;
  
  return result;
};