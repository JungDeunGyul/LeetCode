/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverage = function(nums) {
  const averageArray = [];
  let checkLastIndex = nums.length;
  
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < checkLastIndex; i++) {
    averageArray.push((nums[i] + nums[checkLastIndex - 1]) / 2);
    
    checkLastIndex--;
  }
  
  
  const result = Math.min(...averageArray);
  
  return result;
};