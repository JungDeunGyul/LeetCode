/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const countOperations = function(num1, num2) {
  let count = 0;

  while (num1 !== 0 && num2 !== 0) {
    count++;

    if (num1 >= num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }

  return count;
};