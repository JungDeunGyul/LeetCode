/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
  const splitStr = s.split(" ");
  const sortStr = new Array(splitStr.length - 1);

  for (let i = 0; i < splitStr.length; i++) {
    for (let k = 0; k < splitStr.length; k++) {
      const findNum = k + 1;

      if (splitStr[i].indexOf(findNum.toString()) !== -1) {
        sortStr[k] = splitStr[i].replace(findNum.toString(), "");
        break;
      }
    }
  }
  
  const result = sortStr.join(" ");
  
  return result;
};
