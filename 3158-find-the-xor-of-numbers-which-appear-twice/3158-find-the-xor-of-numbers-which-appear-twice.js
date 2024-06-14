/**
 * @param {number[]} nums
 * @return {number}
 */
const duplicateNumbersXOR = function(nums) {
  const numsMap = new Map();
  const numsLength = nums.length;
  
  for (let i = 0; i < numsLength; i++) {
    numsMap[nums[i]] = numsMap[nums[i]] ? numsMap[nums[i]] + 1 : 1;
  }

  let sumNum = 0;
  
  for (const property in numsMap) {
    if (numsMap[property] === 2) {
      sumNum ^= Number(property);
    }
  }
  
  const result = sumNum;
  
  return result;
};