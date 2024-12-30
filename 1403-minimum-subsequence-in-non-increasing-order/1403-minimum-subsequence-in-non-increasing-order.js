/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = function(nums) {
  nums.sort((a, b) => b - a);

  const result = [];
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let selectedSum = 0;

  for (let num of nums) {
    selectedSum += num;
    result.push(num);

    if (selectedSum > totalSum - selectedSum) {
      break;
    }
  }

  return result;
};