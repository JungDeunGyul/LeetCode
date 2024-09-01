/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function(nums) {
  let checkNum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(checkNum) > Math.abs(nums[i])) {
      checkNum = nums[i];
    } else if (Math.abs(checkNum) === Math.abs(nums[i]) && checkNum < nums[i]) {
      checkNum = nums[i];
    }
  }
  
  return checkNum;
};