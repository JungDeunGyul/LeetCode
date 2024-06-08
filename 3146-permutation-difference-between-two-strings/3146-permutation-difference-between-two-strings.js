/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const findPermutationDifference = function(s, t) {
  const sLength = s.length;
  let countDif = 0;
  
  for (let i = 0; i < sLength; i++) {
    countDif += Math.abs(i - t.indexOf(s[i]));
  }
  
  const result = countDif;
  
  return result;
};
