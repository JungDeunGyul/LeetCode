/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = function(words) {
  const firstWord = new Map();
  
  for (let i = 0; i < words[0].length; i++) {
    firstWord[words[0][i]] = firstWord[words[0][i]] ? firstWord[words[0][i]] + 1 : 1;
  }
  
  for (let i = 1; i < words.length; i++) {
    const checkWord = new Map();
    
    for (let k = 0; k < words[i].length; k++) {
      checkWord[words[i][k]] = checkWord[words[i][k]] ? checkWord[words[i][k]] + 1 : 1;
    }
    
    for (const key in firstWord) {
      if (checkWord[key] === undefined) {
        delete firstWord[key];
      } else if (firstWord[key] > checkWord[key]) {
        firstWord[key] = checkWord[key];
      }
    }
  }
  
  const result = [];

  for (const key in firstWord) {
    for (let i = 0; i < firstWord[key]; i++) {
     result.push(key); 
    }
  }

  
  return result;
};