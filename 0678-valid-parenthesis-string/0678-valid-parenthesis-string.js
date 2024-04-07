/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function(s) {
  let minOpen = 0;
  let maxOpen = 0;

  for (let char of s) {
    if (char === '(') {
      minOpen ++;
      maxOpen ++;
    } else if (char === ')') {
        minOpen = Math.max(0, minOpen - 1);
        maxOpen --;
        
      if (maxOpen < 0) {
        return false;
      }
    } else { 
      minOpen = Math.max(0, minOpen - 1);
      maxOpen ++;
    }
  }
  
  if (minOpen === 0) {
    return true;
  } else {
    return false;
  }  
};