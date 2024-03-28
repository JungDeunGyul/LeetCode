/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  
  let originNum = x;
  let reversedNum = 0;
  
  while (originNum !== 0) {
    const digit = originNum % 10;

    reversedNum = reversedNum * 10 + digit;
    originNum = Math.floor(originNum / 10);
  }
    
  return x === reversedNum;
};