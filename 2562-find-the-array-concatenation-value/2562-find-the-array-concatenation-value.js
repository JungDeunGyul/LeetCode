/**
 * @param {number[]} nums
 * @return {number}
 */
const findTheArrayConcVal = function(nums) {
  let result = 0;
  const mid = Math.floor(nums.length / 2);
  const isOdd = nums.length % 2 !== 0;

  for (let i = 0; i < mid; i++) {   
    result += Number(`${nums[i]}${nums[nums.length - 1 - i]}`);
  }

  if (isOdd) {
    result += nums[mid];
  }

  return result;
};
