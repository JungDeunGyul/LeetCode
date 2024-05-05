/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [[], []];

  const setNums1 = [...set1].sort((a, b) => (a - b));
  const setNums2 = [...set2].sort((a, b) => (a - b));
  
  const setNums1Length = setNums1.length;
  const setNums2Length = setNums2.length;

  for (let i = 0; i < setNums1Length; i++) {
    if (!setNums2.includes(setNums1[i])) {
      result[0].push(setNums1[i]);
    }
  }
  
  for (let i = 0; i < setNums2Length; i++) {
    if (!setNums1.includes(setNums2[i])) {
      result[1].push(setNums2[i]);
    }
  }
  
  return result;
}; 