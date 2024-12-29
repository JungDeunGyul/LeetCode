/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
  const arrLength = arr.length;
  let maxSoFar = -1;

  for (let i = arrLength - 1; i >= 0; i--) {
    const current = arr[i];
    
    arr[i] = maxSoFar;
    maxSoFar = Math.max(maxSoFar, current);
  }

  return arr;
};
