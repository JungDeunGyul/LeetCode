/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function(nums) {
  let operations = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const increment = nums[i - 1] - nums[i] + 1;
      
      nums[i] += increment;
      operations += increment;
    }
  }

  return operations;
};