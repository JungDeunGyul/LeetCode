/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function(rectangles) {
  let maxLen = 0;
  let count = 0;

  for (const [l, w] of rectangles) {
    const squareSide = Math.min(l, w);

    if (squareSide > maxLen) {
      maxLen = squareSide;
      count = 1;
    } else if (squareSide === maxLen) {
      count++; 
    }
  }

  return count;
};