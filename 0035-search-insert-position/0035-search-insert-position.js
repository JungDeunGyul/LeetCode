/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  const numsLength = nums.length;
  
  if (nums[numsLength - 1] < target) {
    return numsLength;
  }
  
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
};
