/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
  let firstNum = init;
  const numsLength = nums.length;

  for (let i = 0; i < numsLength; i++) {
    firstNum = fn(firstNum, nums[i]);
  }

  return firstNum;
};