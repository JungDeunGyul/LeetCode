/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function(num, k) {
  if (num.length === k) {
    return "0";
  }

  const stack = [];
  let removed = 0;

  for (let digit of num) {
    while (stack.length > 0 && stack[stack.length - 1] > digit && removed < k) {
      stack.pop();
      removed ++;
    }

    stack.push(digit);
  }

  while (removed < k) {
    stack.pop();
    removed ++;
  }

  let result = stack.join("");

  while (result.length > 1 && result[0] === "0") {
    result = result.slice(1);
  }

  return result;
};