/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
  const seenNum = new Set();
  const result = [];

  for (const num of nums) {
    if (seenNum.has(num)) {
        result.push(num);
    } else {
        seenNum.add(num);
    }
  }

  return result;
};