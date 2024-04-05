/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  let prevStep1 = 1;
  let prevStep2 = 2;
  let currentSteps;

  for (let i = 3; i <= n; i++) {
    currentSteps = prevStep1 + prevStep2;
    prevStep1 = prevStep2;
    prevStep2 = currentSteps;
  }

  return currentSteps;
};