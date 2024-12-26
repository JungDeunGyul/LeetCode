/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function(nums) {
  let countNegativeNum = 0;
  let countPositiveNum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      countNegativeNum++;
    } else if (nums[i] > 0) {
      countPositiveNum++;
    }
  }
  
  if (countNegativeNum >= countPositiveNum) {
    return countNegativeNum;
  } else {
    return countPositiveNum;
  }
};