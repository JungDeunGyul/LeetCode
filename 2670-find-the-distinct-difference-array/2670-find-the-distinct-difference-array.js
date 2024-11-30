/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distinctDifferenceArray = function(nums) {
  const numsArrayLength = nums.length;
  const prefixSet = new Set();
  const suffixCount = new Map();

  const result = new Array(numsArrayLength).fill(0);

  for (const num of nums) {
    suffixCount.set(num, (suffixCount.get(num) || 0) + 1);
  }
  
  for (let i = 0; i < numsArrayLength; i++) {
    prefixSet.add(nums[i]);

    if (suffixCount.get(nums[i]) === 1) {
      suffixCount.delete(nums[i]);
    } else {
      suffixCount.set(nums[i], suffixCount.get(nums[i]) - 1);
    }

    result[i] = prefixSet.size - suffixCount.size;
  }

  return result;
};