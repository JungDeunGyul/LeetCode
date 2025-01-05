/**
 * @param {string} num
 * @return {string}
 */
const removeTrailingZeros = function(num) {
  const NUMS_LENGTH = num.length;
  let copyNum = num;

  for (let i = NUMS_LENGTH - 1; i >= 0; i--) {
    if (copyNum[i] === "0") {
      copyNum = copyNum.slice(0, i);
    } else {
      break;
    }
  }
  
  return copyNum;
};