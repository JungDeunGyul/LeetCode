/**
 * @param {number[][]} grid
 * @return {number}
 */
const deleteGreatestValue = function (grid) {
  let sumMaximumNum = 0;

  while (grid[0].length > 0) {
    let maxInThisRound = 0;

    for (let i = 0; i < grid.length; i++) {
      const maxInRow = Math.max(...grid[i]);
      grid[i].splice(grid[i].indexOf(maxInRow), 1);

      if (maxInRow > maxInThisRound) {
        maxInThisRound = maxInRow;
      }
    }
    
    sumMaximumNum += maxInThisRound;
  }

  return sumMaximumNum;
};
