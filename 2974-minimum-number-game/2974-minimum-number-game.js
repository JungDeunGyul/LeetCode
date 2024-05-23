/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberGame = function(nums) {
  const result = [];
  
  const aliceArr = [];
  const bobArr = [];
  
  const numsLength = nums.length;
  
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < numsLength; i += 2) {
    aliceArr.push(nums[i]);
    bobArr.push(nums[i + 1]);
    
    lastIndex = aliceArr.length - 1;

    result.push(bobArr[lastIndex]);
    result.push(aliceArr[lastIndex]);
  }
  
  return result;
};