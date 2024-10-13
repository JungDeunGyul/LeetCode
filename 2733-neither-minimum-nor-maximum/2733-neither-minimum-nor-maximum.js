/**
 * @param {number[]} nums
 * @return {number}
 */
const findNonMinOrMax = function(nums) {
  const numsLength = nums.length;
  if (numsLength <= 2) {
    return -1;
  }
  
  nums.sort((a, b) => a - b);
  
  for (let i = 1; i < numsLength; i++) {
    if (nums[i] !== nums[0] && nums[i] !== nums[numsLength - 1]) {
      return nums[i];
    }
  }
  
  return -1;
};