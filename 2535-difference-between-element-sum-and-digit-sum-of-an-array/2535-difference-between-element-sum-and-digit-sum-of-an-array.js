/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function(nums) {
  const sumNum = nums.reduce((a, b) => a + b);
  const digitSum = nums.join("").split("").reduce((a, b) => Number(a) + Number(b));
  
  const result = Math.abs(sumNum - digitSum);
  
  return result;
};