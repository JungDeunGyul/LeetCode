/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
  const codeLength = code.length;
  const result = new Array(codeLength).fill(0);

  if (k === 0) {
    return result;
  } 

  for (let i = 0; i < codeLength; i++) {
    let sum = 0;

    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % codeLength];
      }
    } else {
      for (let j = 1; j <= Math.abs(k); j++) {
        sum += code[(i - j + codeLength) % codeLength];
      }
    }

    result[i] = sum;
  }

  return result;
};

