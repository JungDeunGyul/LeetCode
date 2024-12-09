/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const isArraySpecial = function (nums, queries) {
  const numsLength = nums.length;

  const diff = new Array(numsLength - 1).fill(0);
  for (let i = 0; i < numsLength - 1; i++) {
    diff[i] = nums[i] % 2 === nums[i + 1] % 2 ? 1 : 0;
  }

  const prefixSum = new Array(numsLength).fill(0);
  for (let i = 0; i < diff.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + diff[i];
  }

  return queries.map(([from, to]) => {
    return prefixSum[to] - prefixSum[from] === 0;
  });
};
