/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = function(nums) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.indexOf(nums[i])) {
      result.push(nums[i]);
    }
  }
  
  return result;
};