/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const checkDuplicate = new Map();
  const numsLength = nums.length;
  
  for (let i = 0; i < numsLength; i++) {
    checkDuplicate[nums[i]] = checkDuplicate[nums[i]] ? checkDuplicate[nums[i]] + 1 : 1;
    
    if (checkDuplicate[nums[i]] === 2) {
      return true;
    }
  }

  return false;
};
