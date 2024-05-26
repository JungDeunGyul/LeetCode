/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = function(hours, target) {
  const hoursLength = hours.length;
  let countEmployess = 0;
  
  for (let i = 0; i < hoursLength; i++) {
    if (hours[i] >= target) {
      countEmployess++;
    }
  }
  
  const result = countEmployess;
  
  return result;
};