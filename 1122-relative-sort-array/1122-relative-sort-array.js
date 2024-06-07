/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const result = [];
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  
  for (let i = 0; i < arr2Length; i++) {
    for (let k = 0; k < arr1Length; k++) {
      if (arr2[i] === arr1[k]) {
        result.push(arr1[k]);
        arr1.splice(k, 1);
        k--;
      }
    }
  }
  
  arr1.sort((a, b) => a - b);
  
  result.push(...arr1);
  
  return result;
};