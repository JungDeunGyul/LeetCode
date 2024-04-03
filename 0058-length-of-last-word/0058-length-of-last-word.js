/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const sArray = s.trim().split(" ");
  const sArrayLength = sArray.length;

  const answer = sArray[sArrayLength - 1].length;
  
  return answer
};