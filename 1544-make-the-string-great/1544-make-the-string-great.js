/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
  let sLength = s.length;
  
  if (sLength <= 1) {
    return s;
  }
  
  const sArray = s.split("");
  let i = 1;
  
  while (i < sLength) {
    if (sArray[i - 1] !== sArray[i] && sArray[i - 1].toLowerCase() === sArray[i].toLowerCase()) {
      sArray.splice(i - 1, 2);
      sLength -= 2;
      
      i = Math.max(1, i - 1); 
    } else {
      i++;
    }
  }
  
  return sArray.join("");
};