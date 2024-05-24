/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  const arrLength = s.length;
  const strArrBucket = new Array(arrLength);
  
  for (let i = 0; i < arrLength; i++) {
    strArrBucket[indices[i]] = s[i];
  }
  
  const result = strArrBucket.join("");
  
  return result;
};