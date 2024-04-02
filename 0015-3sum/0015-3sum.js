/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const result = [];
  const numsLength = nums.length;
  
  nums.sort((a,b) => a - b);
  
  if (nums.every((currentValue) => currentValue > 0)) {
    return result;
  }
  
  for (let i = 0; i < numsLength; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    let left = i + 1;
    let right = numsLength - 1;
    
    while (left < right) {
      const sumNum = nums[i] + nums[left] + nums[right];
      
      if (sumNum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        
        left ++;
        right --;
      } else if (sumNum < 0) {
        left ++;
      } else {
        right --;
      }
    }
  }
  
  return result;
};