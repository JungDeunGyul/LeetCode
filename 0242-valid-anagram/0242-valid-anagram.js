/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const sortS = s.split("").sort().join("");
  const sortT = t.split("").sort().join("");
  
  const result = sortS === sortT;
  
  return result;
};