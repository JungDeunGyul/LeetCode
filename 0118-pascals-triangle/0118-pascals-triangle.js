/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const currentRow = [1];

    for (let k = 1; k < i; k++) {
      currentRow.push(prevRow[k - 1] + prevRow[k]);
    }
    
    currentRow.push(1);
    triangle.push(currentRow);
  }

  return triangle;
};