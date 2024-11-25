/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = function(arr, a, b, c) {
  let count = 0;
  const arrLength = arr.length;

  for (let i = 0; i < arrLength - 2; i++) {
    for (let j = i + 1; j < arrLength - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) {
        continue;
      }

      for (let k = j + 1; k < arrLength; k++) {
        if (
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }

  return count;
};
