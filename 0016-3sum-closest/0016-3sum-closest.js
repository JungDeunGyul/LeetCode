/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; 
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(target - sum);
      
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }
      
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closestSum;
};