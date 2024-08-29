/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
const getFinalState = function(nums, k, multiplier) {
  for (let i = 0; i < k; i ++) {
    const minNum = Math.min(...nums);
    
    for (let z = 0; z < nums.length; z++) {
      if (nums[z] === minNum) {
        nums[z] = nums[z] * multiplier;
        
        break;
      }
    }
  }
  
  return nums;
};