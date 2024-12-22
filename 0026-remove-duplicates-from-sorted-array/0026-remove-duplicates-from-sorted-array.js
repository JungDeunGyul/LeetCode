/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[result - 1]) {
      nums[result] = nums[i];
      result++;
    }
  }

  return result;
};