/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
  const sentenceLength = sentence.length;
  const checkAlphabet = new Map();
  
  for (let i = 0; i < sentenceLength; i++) {
    checkAlphabet.set(sentence[i], checkAlphabet.get(sentence[i]) ? checkAlphabet.get(sentence[i]) + 1 : 1);
  }
  
  if (checkAlphabet.size !== 26) {
    return false;
  } else {
    return true;
  }
};
