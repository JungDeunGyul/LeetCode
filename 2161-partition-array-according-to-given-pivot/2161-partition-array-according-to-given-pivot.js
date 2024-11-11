/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = function(nums, pivot) {
  const lessThanPivot = [];
  const equalToPivot = [];
  const greaterThanPivot = [];

  for (const el of nums) {
    if (pivot < el) {
      greaterThanPivot.push(el);
    } else if (pivot > el) {
      lessThanPivot.push(el);
    } else {
      equalToPivot.push(el);
    }
  }
  
  const result = [...lessThanPivot, ...equalToPivot, ...greaterThanPivot];

  return result;
};