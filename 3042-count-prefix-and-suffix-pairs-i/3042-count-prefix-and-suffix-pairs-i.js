/**
 * @param {string[]} words
 * @return {number}
 */
const countPrefixSuffixPairs = function(words) {
  let count = 0;
  const wordsLength = words.length;

  for (let i = 0; i < wordsLength; i++) {
    for (let j = i + 1; j < wordsLength; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
          count++;
      }
    }
  }

  return count;
};

function isPrefixAndSuffix(str1, str2) {
  return str2.startsWith(str1) && str2.endsWith(str1);
}
