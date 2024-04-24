/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const result = [];
  
  const set1 = new Set(nums1);
  const nums1Array = [...set1];
  
  const set2 = new Set(nums2);
  const nums2Array = [...set2];
  
  const nums1ArrayLength = nums1Array.length;
  
  for (let i = 0; i < nums1ArrayLength; i++) {
    if (nums2Array.includes(nums1Array[i])) {
      result.push(nums1Array[i]);
    }
  }
  
  return result;
};