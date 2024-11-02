/**
 * @param {number[]} nums
 * @return {number}
 */
const countDistinctIntegers = function(nums) {
  const extendedNums = [...nums];
  
  for (const num of nums) {
    const reversedNum = parseInt(num.toString().split("").reverse().join(""));
    extendedNums.push(reversedNum);
  }
  
  const uniqueArr = [...new Set(extendedNums)];
  const result = uniqueArr.length;
  
  return result;
};