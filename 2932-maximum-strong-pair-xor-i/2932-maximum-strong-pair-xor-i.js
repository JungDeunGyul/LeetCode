/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumStrongPairXor = function(nums) {
  const numsLength = nums.length;
  let checkValue = 0;

  for (let i = 0; i < numsLength; i++) {
    for (let k = i; k < numsLength; k++) {
      if (
        Math.abs(nums[i] - nums[k]) <= Math.min(nums[i], nums[k]) &&
        checkValue < (nums[i] ^ nums[k])
      ) {
        checkValue = nums[i] ^ nums[k];
      }
    }
  }

  return checkValue;
};