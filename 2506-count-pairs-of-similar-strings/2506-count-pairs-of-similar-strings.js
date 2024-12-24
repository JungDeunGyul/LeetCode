/**
 * @param {string[]} words
 * @return {number}
 */
const similarPairs = function(words) {
  const charGroups = new Map();

  for (const word of words) {
    const key = [...new Set(word)].sort().join("");

    charGroups.set(key, (charGroups.get(key) || 0) + 1);
  }

  let count = 0;

  for (const freq of charGroups.values()) {
    if (freq > 1) {
      count += (freq * (freq - 1)) / 2;
    }
  }

  return count;
};