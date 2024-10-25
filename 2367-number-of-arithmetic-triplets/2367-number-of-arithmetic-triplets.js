/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  const numSet = new Set(nums);
  
  let count = 0;

  for (let num of nums) {
    if (numSet.has(num + diff) && numSet.has(num + 2 * diff)) {
      count++;
    }
  }

  return count;
};