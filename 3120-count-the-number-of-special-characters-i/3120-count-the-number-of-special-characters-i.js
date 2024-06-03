/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = function(word) {
  const lowerCaseWordArr = word.toLowerCase().split("");
  const setLowerCaseWordArr = new Set(lowerCaseWordArr);
  const uniqueArr = [...setLowerCaseWordArr];
  const uniqueArrLength = uniqueArr.length;
  
  let countSpecialWord = 0;
  
  for (let i = 0; i < uniqueArrLength; i++) {
    if(word.includes(uniqueArr[i].toLowerCase()) && word.includes(uniqueArr[i].toUpperCase())) {
      countSpecialWord++;
    }
  }
  
  const result = countSpecialWord;
  
  return result;
};