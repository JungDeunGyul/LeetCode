/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function(num) {
  const digits = num.toString().split("");
  const n = digits.length;
  digits.sort();
  
  let sum = 0;

  for (let i = 0; i < n / 2; i++) {
    const pair = digits[i] + digits[n - 1 - i];
    sum += Number(pair);
  }

  return sum;
};