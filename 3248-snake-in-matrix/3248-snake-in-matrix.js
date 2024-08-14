/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
const finalPositionOfSnake = function(n, commands) {
  let checkArea = 0;
  
  for (const el of commands) {
    switch (el) {
      case "RIGHT":
        checkArea++;
        break;
      case "LEFT":
        checkArea--;
        break;
      case "DOWN":
        checkArea += n;
        break;
      case "UP":
        checkArea -= n;
        break;
    }
  }
  
  return checkArea;
};