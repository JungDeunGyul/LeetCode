/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
  const numsLength = nums.length;
  const count = new Array(numsLength + 1).fill(0);
  
  const duplicate = [];
  const missingNum = [];

  for (const num of nums) {
    count[num]++;
  }

  for (let i = 1; i <= numsLength; i++) {
    if (count[i] === 2) {
      duplicate.push(i);
    } else if (count[i] === 0) {
      missingNum.push(i);
    }
  }
  
  const result = [...duplicate, ...missingNum];

  return result;
};