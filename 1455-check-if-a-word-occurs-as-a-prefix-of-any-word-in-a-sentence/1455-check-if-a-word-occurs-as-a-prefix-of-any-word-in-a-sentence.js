/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function(sentence, searchWord) {
  const splitSentence = sentence.split(" ");
  
  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].indexOf(searchWord) === 0) {
      return i + 1;
    }
  }
  
  return -1;
};