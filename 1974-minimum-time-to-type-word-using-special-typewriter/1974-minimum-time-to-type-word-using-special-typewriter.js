/**
 * @param {string} word
 * @return {number}
 */
const minTimeToType = function(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let countMove = 0;
  let currentPointerIndex = 0;

  for (const el of word) {
    const targetIndex = alphabet.indexOf(el);
    const forwardSteps = (targetIndex - currentPointerIndex + 26) % 26;
    const backwardSteps = (currentPointerIndex - targetIndex + 26) % 26;
    const steps = Math.min(forwardSteps, backwardSteps);

    countMove += steps + 1;

    currentPointerIndex = targetIndex;
  }

  return countMove;
};
