/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  let result = 0;
  const numsLength = nums.length;
  
  for (let i = 0; i < numsLength - 1; i ++) {
    for (let k = i + 1; k < numsLength; k ++) {
      if (i === k) {
        continue;
      }
      
      if (nums[i] === nums[k]) {
        result++;
      }
    }
  }
  
  return result;
};