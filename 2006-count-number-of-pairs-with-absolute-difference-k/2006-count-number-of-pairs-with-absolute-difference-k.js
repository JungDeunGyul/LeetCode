/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = function(nums, k) {
  let count = 0;
  const freqNum = new Map();

  for (const num of nums) {
    if (freqNum.has(num - k)) {
      count += freqNum.get(num - k);
    }

    if (freqNum.has(num + k)) {
      count += freqNum.get(num + k);
    }

    freqNum.set(num, (freqNum.get(num) || 0) + 1);
  }

  return count;
};
