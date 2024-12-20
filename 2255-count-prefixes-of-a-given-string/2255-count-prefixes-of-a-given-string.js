/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = function (words, s) {
  let result = 0;

  for (const el of words) {
    if (el[0] === s[0]) {
      const elLength = el.length;

      for (let i = 0; i < elLength; i++) {
        if (el[i] !== s[i]) {
          result--;

          break;
        }
      }

      result++;
    }
  }

  return result;
};
