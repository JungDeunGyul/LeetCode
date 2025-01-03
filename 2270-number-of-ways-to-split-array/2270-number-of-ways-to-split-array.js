/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function(nums) {
  const numsLength = nums.length;
  const totalSum = nums.reduce((a, b) => a + b);
  
  let leftSum = 0;
  let validCount = 0;

  for (let i = 0; i < numsLength - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;

    if (leftSum >= rightSum) {
      validCount++;
    }
  }

  return validCount; 
};