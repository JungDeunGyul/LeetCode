/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function(n) {
  if (n === 1){
    return true;
  } else if (n === 0) {
    return false;
  }
  
  let copyN = n;
  
  while(copyN !== 1) {
    if (copyN % 2 === 0) {
      copyN = copyN / 2;
    } else if (copyN % 3 === 0) {
      copyN = copyN / 3;
    } else if (copyN % 5 === 0) {
      copyN = copyN / 5;
    } else {
      return false;
    }
  }
  
  return true;
};