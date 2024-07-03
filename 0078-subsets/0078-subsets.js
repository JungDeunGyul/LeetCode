/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const result = [];
  const numsLength = nums.length;
  
  const backTrack = (start, currentSubset) => {
    result.push([...currentSubset]);
    
    for (let i = start; i < numsLength; i++) {
      currentSubset.push(nums[i]);
      
      backTrack(i + 1, currentSubset);
      
      currentSubset.pop();
    }
  };
  
  backTrack(0, []);
  
  return result;
};