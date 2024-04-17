/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  if (num === 0) {
    return 0;
  } else if (num < 10) {
    return num;
  }
  
  let numString = num.toString();
  let result;
  
  while (numString.length !== 1) {
    result = 0;
    for (let i = 0; i < numString.length; i++) {
      result += parseInt(numString[i]);
    }

    numString = result.toString();
  }
  
  return parseInt(result);
};