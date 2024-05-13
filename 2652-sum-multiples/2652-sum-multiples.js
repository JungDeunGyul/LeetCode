/**
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = function(n) {
  let sumNumber = 0;
  
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0) {
      sumNumber += i;
    } else if (i % 5 === 0) {
      sumNumber += i;
    } else if (i % 7 ===0) {
      sumNumber += i;
    }
  }
  
  const result = sumNumber;
  
  return result;
};