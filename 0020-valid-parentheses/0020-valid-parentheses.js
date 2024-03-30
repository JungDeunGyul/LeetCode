/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (char in mapping) {
      const topElement = stack.pop();

      if (mapping[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};