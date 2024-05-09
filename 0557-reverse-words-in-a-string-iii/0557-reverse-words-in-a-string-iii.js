/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const splitS = s.split(" ");
  
  for (let i = 0; i < splitS.length; i++) {
    splitS[i] = splitS[i].split("").reverse().join("");
  }
  
  const result = splitS.join(" ");
  
  return result;
};