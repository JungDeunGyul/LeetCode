/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
  if (n % 2 === 0) {
    return "x".repeat(n - 1) + "y";
  } else {
    return "x".repeat(n);
  }
};