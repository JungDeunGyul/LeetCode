/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  const squareNums = [];
  const numsArrayLength = nums.length;
  
  for (let i = 0; i < numsArrayLength; i ++) {
    squareNums.push(nums[i] * nums[i]);
  }
  
  const result = squareNums.sort((a, b) => (a - b));
  
  return result
};