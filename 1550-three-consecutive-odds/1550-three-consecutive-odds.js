/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) {
  const arrLength = arr.length;
  let countOdd = 0;
  
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] % 2 !== 0) {
      countOdd ++;
      
      if (countOdd === 3) {
        return true;
      }
    } else {
      countOdd = 0;
    }
  }
  
  return false;
};