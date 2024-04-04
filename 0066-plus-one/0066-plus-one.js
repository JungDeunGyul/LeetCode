/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const result = [];

  const digitsString = digits.join("");
  const digitsNumber = BigInt(digitsString) + BigInt(1);
  const digitsNumberArray = digitsNumber.toString().split("");
  
  for (let i = 0; i < digitsNumberArray.length; i++) {
    result.push(parseInt(digitsNumberArray[i]));
  } 
  
  return result;
};