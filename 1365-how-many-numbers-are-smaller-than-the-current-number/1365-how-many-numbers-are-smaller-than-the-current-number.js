/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const result = [];
  const numsLength = nums.length;
  
  for (let i = 0; i < numsLength; i++) {
    let checkNum = 0;
    
    for (let k = 0; k < numsLength; k++) {
      if (nums[i] > nums[k]) {
        checkNum++;
      }
    }
    result.push(checkNum);
  }
  return result;
};
