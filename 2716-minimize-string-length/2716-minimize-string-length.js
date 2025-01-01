/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = function(s) {
  const seen = new Set();
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen.has(char)) {
      continue;
    }

    while (
      stack.length && stack[stack.length - 1] > char &&
      s.indexOf(stack[stack.length - 1], i) !== -1
    ) {
      seen.delete(stack.pop());
    }

    stack.push(char);
    seen.add(char);
  }

  return stack.length;
};