/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let countZero = 0;

  while(nums.includes(0)) {
    nums.splice(nums.indexOf(0), 1)
    countZero ++;
  }
  
  for (let i = 0; i < countZero; i++) {
    nums.push(0);
  }

  return nums
};