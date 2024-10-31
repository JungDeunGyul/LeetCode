/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function(nums) {
  const numBucket = {};
  const result = [0, 0];
  
  for (const el of nums) {
    numBucket[el] = numBucket[el] ? numBucket[el] + 1 : 1;
  }
  
  for (const prop in numBucket) {
    result[0] += Math.floor(numBucket[prop] / 2);
    result[1] += Math.floor(numBucket[prop] % 2);
  }
  
  
  return result;
};