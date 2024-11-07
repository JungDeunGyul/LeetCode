/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxSum = function(grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;

  let countSum = 0;

  for (let row = 0; row < rowLength - 2; row++) {
    for (let col = 0; col < colLength - 2; col++) {
      const hourglassSum = grid[row][col] + grid[row][col + 1] + grid[row][col + 2] + 
      grid[row + 1][col + 1] + 
      grid[row + 2][col] + grid[row + 2][col + 1] + grid[row + 2][col + 2]; 

      countSum = Math.max(countSum, hourglassSum);
    }
  }

  return countSum;
};