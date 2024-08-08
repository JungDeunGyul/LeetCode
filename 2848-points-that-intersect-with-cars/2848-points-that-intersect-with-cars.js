/**
 * @param {number[][]} nums
 * @return {number}
 */
const numberOfPoints = function(nums) {
  const coveredPoints = new Set();
  
  for (const [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      coveredPoints.add(i);
    }
  }
  
  const result = coveredPoints.size;
  
  return result;
};
