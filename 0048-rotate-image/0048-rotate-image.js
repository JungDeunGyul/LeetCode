/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const matrixLength = matrix.length;
  const matrixLengthHalf = Math.floor(matrixLength / 2);
  
  for (let layer = 0; layer < matrixLengthHalf; layer++) {
    const first = layer;
    const last = matrixLength - 1 - layer;
    
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];

      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  
  return matrix;
};