/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const modifiedMatrix = function(matrix) {
  const bigNumColumn = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    let checkNum = 0;
    
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] > checkNum) {
        checkNum = matrix[k][i];
      }
    }
    
    bigNumColumn.push(checkNum);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] === -1) {
        matrix[i][k] = bigNumColumn[k];
      }
    }
  }
  
  return matrix;
};
