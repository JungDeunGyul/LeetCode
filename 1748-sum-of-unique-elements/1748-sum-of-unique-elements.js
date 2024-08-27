/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  const numBucket = new Map();
  let sumUniqueNum = 0;
  
  for (const num of nums) {
    numBucket[num] = numBucket[num] ? numBucket[num] + 1 : 1;
  }

  for (const key in numBucket) {
    if (numBucket[key] === 1) {
      sumUniqueNum += Number(key);
    }
  }
  
  return sumUniqueNum;
};
