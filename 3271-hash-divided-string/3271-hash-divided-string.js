/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const stringHash = function(s, k) {
  const alphabetBucket = {
    "a": 0, "b": 1, "c": 2, "d": 3, "e": 4,
    "f": 5, "g": 6, "h": 7, "i": 8, "j": 9,
    "k": 10, "l": 11, "m": 12, "n": 13, "o": 14,
    "p": 15, "q": 16, "r": 17, "s": 18, "t": 19,
    "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25
  };

  let result = "";
  const sLength = s.length;

  for (let i = 0; i < sLength; i += k) {
    const subString = s.slice(i, i + k);
    let sum = 0;

    for (const char of subString) {
      sum += alphabetBucket[char];
    }

    const hashedChar = sum % 26;
    const hashedLetter = Object.keys(alphabetBucket).find(key => alphabetBucket[key] === hashedChar);
    result += hashedLetter;
  }

  return result;
};
