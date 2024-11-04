/**
 * @param {string} word
 * @return {string}
 */
const compressedString = function(word) {
  let result = "";
  let checkIndex = 0;
  
  while (checkIndex < word.length) {
    let checkStr = word[checkIndex];
    let countRepeatStr = 0;
    
    while (checkIndex < word.length && word[checkIndex] === checkStr && countRepeatStr < 9) {
      countRepeatStr++;
      checkIndex++;
    }
    
    result += countRepeatStr + checkStr;
  }
  
  return result;
};