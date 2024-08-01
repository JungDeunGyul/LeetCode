/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
  const getStr = {};
  
  for (let i = 0; i < text.length; i++) {
    getStr[text[i]] = getStr[text[i]] ? getStr[text[i]] + 1 : 1;
  }
  
  const result = Math.min(
    getStr['b'] || 0,
    getStr['a'] || 0,
    Math.floor((getStr['l'] || 0) / 2),
    Math.floor((getStr['o'] || 0) / 2),
    getStr['n'] || 0
  );
  
  return result;
};