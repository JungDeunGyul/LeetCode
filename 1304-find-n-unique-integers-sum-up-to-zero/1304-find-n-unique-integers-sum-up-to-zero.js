/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
  const result = [];
  const loopLength = Math.floor(n / 2);
  
  for (let i = 1; i <= loopLength; i++) {
    result.push(i);
    result.push(-i);
  }
  
  if (n % 2 === 1) {
    result.push(0);
  }
  
  return result;
};
