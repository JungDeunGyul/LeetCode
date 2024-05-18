/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let count = 0;
  let balance = 0;

  for (let char of s) {
    if (char === 'R') {
      balance++;
    } else if (char === 'L') {
      balance--;
    }

    if (balance === 0) {
      count++;
    }
  }

  return count; 
};