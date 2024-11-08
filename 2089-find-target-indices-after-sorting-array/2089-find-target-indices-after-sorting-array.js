/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = function(nums, target) {
  const result = [];

  nums.sort((a, b) => a - b)
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i)
    }
  }
  
  return result;
};
