/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function(arr) {
  let maxChunks = 0;
  let currentMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(currentMax, arr[i]);

    if (currentMax === i) {
      maxChunks++;
    }
  }

  return maxChunks;
};