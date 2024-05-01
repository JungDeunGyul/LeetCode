/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
  const heightsCopy = [...heights];
  const heightSort = heightsCopy.sort((a, b) => a - b);
  const heightsLength = heights.length;
  
  let heightChecker = 0;

  for (let i = 0; i < heightsLength; i++) {
    if (heightSort[i] !== heights[i]) {
      heightChecker++;
    }
  }
  
  return heightChecker;
};