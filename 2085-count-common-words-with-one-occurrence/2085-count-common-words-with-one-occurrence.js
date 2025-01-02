/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = function(words1, words2) {
  const frequencyMap1 = {};
  const frequencyMap2 = {};
  let commonWordCount = 0;

  const populateFrequencyMap = (words, frequencyMap) => {
    for (const word of words) {
      frequencyMap[word] = frequencyMap[word] ? frequencyMap[word] + 1 : 1;
    }
  };

  populateFrequencyMap(words1, frequencyMap1);
  populateFrequencyMap(words2, frequencyMap2);

  for (const word in frequencyMap1) {
    if (frequencyMap1[word] === 1 && frequencyMap1[word] === frequencyMap2[word]) {
      commonWordCount++;
    }
  }

  return commonWordCount;
};
