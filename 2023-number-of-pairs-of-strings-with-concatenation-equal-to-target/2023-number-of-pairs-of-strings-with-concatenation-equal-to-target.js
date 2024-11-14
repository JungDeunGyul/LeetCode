/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
const numOfPairs = function(nums, target) {
  const countMap = {};
  let result = 0;

  for (const num of nums) {
    countMap[num] = countMap[num] ? countMap[num] + 1 : 1;
  }

  for (const num of nums) {
    if (target.startsWith(num)) {
      const checkStrNum = target.slice(num.length);

      if (countMap[checkStrNum]) {
        result += countMap[checkStrNum];

        if (checkStrNum === num) {
          result -= 1;
        }
      }
    }
  }

  return result;
};