/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = function(nums) {
  if (nums.length === 1) {
    return [0];
  }
  
  const leftSum = [0];
  const rightSum = [0];
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    leftSum.push(nums[i] + leftSum[i]);
  }
  
  for (let i = nums.length - 1; 0 < i; i--) {
    rightSum.push(nums[i] + rightSum[rightSum.length - 1]);
  }
  
  rightSum.sort((a, b) => b - a);
  
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  
  return result;
};