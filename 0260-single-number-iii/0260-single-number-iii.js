/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) {
  const result = [];
  const numsLength = nums.length;
  
  for (let i = 0; i < numsLength; i++) {
    if (i === nums.lastIndexOf(nums[i]) && i === nums.indexOf(nums[i])) {
      result.push(nums[i]);
    }
  }
  
  return result;
};