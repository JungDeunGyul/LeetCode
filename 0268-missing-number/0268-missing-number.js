/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const numsLength = nums.length;
  nums.sort((a, b) => (a - b));

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] !== i) {
      return i;
    } 
  }
  
  return numsLength;
};