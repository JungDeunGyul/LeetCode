/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
const countTestedDevices = function(batteryPercentages) {
  let countDevice = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] - countDevice > 0) {
      countDevice++;
    }
  }

  return countDevice;
};