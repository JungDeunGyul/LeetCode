/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const numMap = new Map();
  
  for (const el of nums) {
    numMap[el] = numMap[el] ? numMap[el] + 1 : 1;
  }
  
  const result = Object.keys(numMap)
    .filter(key => numMap[key] === 1)
    .map(key => Number(key));
  
  return result[0];
};