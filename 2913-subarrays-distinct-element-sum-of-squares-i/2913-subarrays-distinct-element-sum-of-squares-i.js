/**
 * @param {number[]} nums
 * @return {number}
 */
const sumCounts = function(nums) {
  const numsLength = nums.length;
  let result = 0;

  for (let i = 0; i < numsLength; i++) {
    const distinctElements = new Set();

    for (let k = i; k < numsLength; k++) {
      distinctElements.add(nums[k]);

      const distinctCount = distinctElements.size;
      result += distinctCount * distinctCount;
    }
  }

  return result;
};