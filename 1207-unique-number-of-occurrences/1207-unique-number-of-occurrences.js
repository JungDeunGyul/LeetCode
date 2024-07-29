/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const countObj = {};
  
  for (const el of arr) {
    countObj[el] = countObj[el] ? countObj[el] + 1 : 1;
  }
  
  const occurrences = [];
  
  for (const key in countObj) {
    if (occurrences.includes(countObj[key])) {
      return false;
    }
    
    occurrences.push(countObj[key]);
  }
  
  return true;
};