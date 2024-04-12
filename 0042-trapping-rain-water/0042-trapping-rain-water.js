/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  if (height.length === 0) {
    return 0;
  }

  const heightLength = height.length;
  let leftMax = new Array(heightLength).fill(0);
  let rightMax = new Array(heightLength).fill(0);
  let totalWater = 0;

  leftMax[0] = height[0];
  for (let i = 1; i < heightLength; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[heightLength - 1] = height[heightLength - 1];
  for (let i = heightLength - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < heightLength; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;  
};