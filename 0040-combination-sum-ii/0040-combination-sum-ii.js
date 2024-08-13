/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  const result = [];
  
  candidates.sort((a, b) => a - b);
  
  function backtrack(start, remainingTarget, currentCombination) {
    if (remainingTarget === 0) {
      result.push([...currentCombination]);
      return;
    }
    
    if (remainingTarget < 0) {
      return;
    }
    
    for (let i = start; i < candidates.length; i++) {
      // Correct condition to skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      
      currentCombination.push(candidates[i]);
      backtrack(i + 1, remainingTarget - candidates[i], currentCombination);
      
      currentCombination.pop();
    }
  }
  
  backtrack(0, target, []);
  
  return result;
};

