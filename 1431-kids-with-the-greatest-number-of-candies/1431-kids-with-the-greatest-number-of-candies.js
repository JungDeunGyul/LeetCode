/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  const biggestNum = Math.max(...candies);
  const result = [];
  
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= biggestNum) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  
  return result;
};