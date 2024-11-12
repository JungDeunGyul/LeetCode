/**
 * @param {string} num
 * @return {boolean}
 */
const isBalanced = function(num) {
  let evenIndexNum = 0;
  let oddIndexNum = 0;

  for (let i = 0; i < num.length; i++) {
    if ((i + 1) % 2 === 0) {
      evenIndexNum += Number(num[i]);
    } else {
      oddIndexNum += Number(num[i]);
    }
  }

  if (evenIndexNum === oddIndexNum) {
    return true;
  } else {
    return false;
  }
};