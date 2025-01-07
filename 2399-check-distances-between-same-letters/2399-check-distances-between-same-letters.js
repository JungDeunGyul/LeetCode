/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
const checkDistances = function(s, distance) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 26; i++) {
    if (s.includes(alphabet[i])) {
      if (distance[i] === s.lastIndexOf(alphabet[i]) - s.indexOf(alphabet[i]) - 1) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
};