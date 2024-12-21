/**
 * @param {number[]} nums
 * @return {number}
 */
const returnToBoundaryCount = function(nums) {
  let result = 0;
  let step = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const checkNum = step + nums[i];

    if (checkNum === 0) {
      result++;
    } 

    step = checkNum;
  }

  return result;
};