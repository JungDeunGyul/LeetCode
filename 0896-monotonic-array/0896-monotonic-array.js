/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function(nums) {
  const numsLength = nums.length;
  
  if (nums[0] - nums[numsLength - 1] >= 0) {
    for (let i = 0; i < numsLength - 1; i++) {
      if (nums[i] - nums[i + 1] < 0) {
        return false;
      }
    }
  } else if (nums[0] - nums[numsLength - 1] <= 0){
    for (let i = 0; i < numsLength - 1; i++) {
      if (nums[i] - nums[i + 1] > 0) {
        return false;
      }
    }
  }
  
  return true;
};