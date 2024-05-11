/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  const splitS = s.split("").sort();
  const splitT = t.split("").sort();

  for (let i = 0; i < splitT.length; i++) {
    if (splitS[i] !== splitT[i]) {
      const result = splitT[i];

      return result;
    }
  }
};