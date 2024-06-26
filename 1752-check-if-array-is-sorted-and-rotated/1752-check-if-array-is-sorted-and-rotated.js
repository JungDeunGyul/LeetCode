/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function(nums) {
  const numsLength = nums.length;
  let rotationPoint = null;
  
  for (let i = 0; i < numsLength - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (rotationPoint !== null) {
        return false;
      }
      
      rotationPoint = i;
    }
  }
  
  const result = rotationPoint === null || nums[0] >= nums[nums.length - 1];
  
  return result;
};