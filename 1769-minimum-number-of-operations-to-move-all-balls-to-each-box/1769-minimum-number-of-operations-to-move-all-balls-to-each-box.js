/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
  const BOX_LENGTH = boxes.length;
  const result = new Array(BOX_LENGTH).fill(0);

  let operations = 0;
  let balls = 0;

  for (let i = 0; i < BOX_LENGTH; i++) {
    result[i] += operations;
    balls += checkBallInBox(boxes[i]);

    operations += balls;
  }

  operations = 0;
  balls = 0;

  for (let i = BOX_LENGTH - 1; i >= 0; i--) {
    result[i] += operations;
    balls += checkBallInBox(boxes[i]);

    operations += balls;
  }

  return result;
};

function checkBallInBox (box) {
  if (box ==="1") {
    return 1;
  } 

  return 0;
}
