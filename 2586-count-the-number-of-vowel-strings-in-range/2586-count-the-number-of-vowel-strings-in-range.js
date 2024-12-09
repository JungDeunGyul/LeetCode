/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const vowelStrings = function(words, left, right) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let countVowelString = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i];
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    
    if (vowels.has(firstChar) && vowels.has(lastChar)) {
      countVowelString++;
    }
  }

  return countVowelString;
};