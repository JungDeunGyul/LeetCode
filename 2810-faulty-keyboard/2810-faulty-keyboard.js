/**
 * @param {string} s
 * @return {string}
 */
const finalString = function(s) {
  const result = [];
  const sLength = s.length;
  
  for (let i = 0; i < sLength; i++) {
    if (s[i] !== "i") {
      result.push(s[i]);
    } else {
      result.reverse();
    }
  }
  
  return result.join("");
};