/**
 * @param {string} s
 * @return {string}
 */
const clearDigits = function(s) {
  const stack = [];
  
  for (const char of s) {
    if (isNaN(char)) {
      stack.push(char);
    } else {
      if (stack.length > 0) {
        stack.pop();
      }
    }
  }
  
  const result = stack.join("");
  
  return result;
};