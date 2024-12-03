/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = function(s, spaces) {
  const result = [];
  let spaceIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
      result.push(" ");
      spaceIndex++;
    }

    result.push(s[i]);
  }

  return result.join("");
};