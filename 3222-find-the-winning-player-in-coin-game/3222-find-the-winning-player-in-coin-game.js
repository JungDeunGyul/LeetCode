/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
const losingPlayer = function(x, y) {
  let isAliceWin = false;
  
  while (x >= 1 && y >= 4) {
    x -= 1;
    y -= 4;
    
    isAliceWin = !isAliceWin;
  }
  
  const result = isAliceWin ? "Alice" : "Bob";
  
  return result;
};