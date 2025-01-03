/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
  let result = "";
  const alphabetBucket = {
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8,
    j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16,
    r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
  };

  for (let i = 0; i < s.length; i += 2){
    if (s[i + 1] === undefined) {
      result += s[i];

      break;
    }

    const alphabetValue = alphabetBucket[s[i]];
    const shiftedIndex = alphabetValue + parseInt(s[i + 1]);

    const shiftedAlphabet = Object.keys(alphabetBucket).find(
      key => alphabetBucket[key] === shiftedIndex % 26
    );

    result += s[i] + shiftedAlphabet;
  }

  return result;
};
