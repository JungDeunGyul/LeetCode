/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function(num) {
  if (num === 1) {
    return false;
  }
  
  let checkNum = 0;
  
  const halfNum = Math.floor(num / 2);
  
  for (let i = 1; i <= halfNum; i++) {
    if (num % i === 0) {
      checkNum += i;
    }
  }
  
  if (checkNum === num) {
    return true;
  } else {
    return false;
  }
};