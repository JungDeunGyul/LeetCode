/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];
  const result = [];
  
  const wordsLength = words.length;
  
  for (let i = 0; i < wordsLength; i++) {
    const checkWord = words[i].toLowerCase();
    let countStr = 1;
  
    if (firstRow.includes(checkWord[0])) {
      for (let k = 1; k < checkWord.length; k++) {
        if (!firstRow.includes(checkWord[k])) {
          break;
        }

        countStr++;
      }
    } else if (secondRow.includes(checkWord[0])) {
      for (let k = 1; k < checkWord.length; k++) {
        if (!secondRow.includes(checkWord[k])) {
          break;
        }

        countStr++;
      }
    } else if (thirdRow.includes(checkWord[0])) {
      for (let k = 1; k < checkWord.length; k++) {
        if (!thirdRow.includes(checkWord[k])) {
          break;
        }
        
        countStr++;
      }
    }
    
    if (checkWord.length === countStr) {
      result.push(words[i]);
    }
  }
  
  return result;
};