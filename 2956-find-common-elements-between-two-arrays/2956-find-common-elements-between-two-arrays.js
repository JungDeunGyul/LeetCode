/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const findIntersectionValues = function(nums1, nums2) {
  const result = [];
  
  function checkNum (arr1, arr2) {
    let countNum = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) !== -1) {
        countNum++;
      }
    }
    
    result.push(countNum);
  }
  
  checkNum(nums1, nums2);
  checkNum(nums2, nums1);
  
  return result;
};