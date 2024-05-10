/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const addedInteger = function(nums1, nums2) {
  const sortNums1 = [...nums1].sort((a, b) => a - b);
  const sortNums2 = [...nums2].sort((a, b) => a - b);
  
  const result = sortNums2[0] - sortNums1[0];
  
  return result;
};