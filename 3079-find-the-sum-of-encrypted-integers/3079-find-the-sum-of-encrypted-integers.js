/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfEncryptedInt = function(nums) {
  let sum = 0;
  
  for (let num of nums) {
    sum += encrypt(num);
  }
  
  function encrypt (num) {
    let numToStringArray = String(num).split("");
    
    if (numToStringArray.length > 1) {
      let max = Math.max(...numToStringArray);
      
      for (let i = 0; i < numToStringArray.length; i++) {
        if (numToStringArray[i] !== max) {
          numToStringArray[i] = max;
        }
      }
    }
    const maxNumString = numToStringArray.join("");
    
    return parseInt(maxNumString);
  }
  
  return sum;
};

