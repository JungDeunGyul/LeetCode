/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const result = [];
    if (nums.length === 1) {
      return [nums];
    }

    nums.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = permute(rest); 
      const attached = permutations.map((el) => [fixed, ...el]); 

      result.push(...attached); 
    });

    return result;
}; 