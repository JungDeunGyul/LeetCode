/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
const generateKey = function(num1, num2, num3) {
  let result = 0;

  for (let i = 0; i < 4; i++) {
    const digit1 = num1 % 10;
    const digit2 = num2 % 10;
    const digit3 = num3 % 10;

    const minDigit = Math.min(digit1, digit2, digit3);

    result += minDigit * Math.pow(10, i);

    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    num3 = Math.floor(num3 / 10);
  }  

  return result;
};