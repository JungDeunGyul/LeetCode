/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  const sumNum = BigInt(num1) + BigInt(num2);
  const numToStr = sumNum.toString();
  const result = numToStr;
  
  return result;
};