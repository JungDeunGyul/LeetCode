/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfChild = function(n, k) {
  let position = 0;
  let direction = 1;

  for (let i = 0; i < k; i++) {
    position += direction;

    if (position === 0 || position === n - 1) {
      direction *= -1;
    }
  }

  return position;
};