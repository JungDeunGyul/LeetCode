/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfSquares = function(nums) {
  const arrayLength = nums.length;
  let sumResult = 0;

  for (let i = 0; i < arrayLength; i++) {
    if (arrayLength % (i + 1) === 0) {
      sumResult += nums[i] * nums[i];
    }
  }

  return sumResult;
};
