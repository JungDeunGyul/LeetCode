/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const freqMap = new Map();
  
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let uniqueCount = 0;
  for (const count of freqMap.values()) {
    uniqueCount += Math.min(count, 2);
  }

  return uniqueCount >= nums.length;  
};