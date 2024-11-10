/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const rowAndMaximumOnes = function(mat) {
  const countNumberOneBucket = [];

  for (let i = 0; i < mat.length; i++) {
    let countNumberOne = 0;
    for (const el of mat[i]) {
      if (el === 1) {
        countNumberOne += 1;
      }
    }

    countNumberOneBucket.push(countNumberOne);
  }

  const maxOne = Math.max(...countNumberOneBucket);
  const maxIndex = countNumberOneBucket.indexOf(maxOne);

  const result = [maxIndex, maxOne]

  return result;
};
