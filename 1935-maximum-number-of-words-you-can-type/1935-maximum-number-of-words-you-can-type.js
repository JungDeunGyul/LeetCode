/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = function(text, brokenLetters) {
  const brokenSet = new Set(brokenLetters);
  const words = text.split(" ");
  let result = 0;

  for (const word of words) {
    let canType = true;

    for (const char of word) {
      if (brokenSet.has(char)) {
        canType = false;
        
        break;
      }
    }

    if (canType) {
      result++
    }
  }

  return result;
};
