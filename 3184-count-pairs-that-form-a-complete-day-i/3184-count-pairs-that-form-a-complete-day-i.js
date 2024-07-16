/**
 * @param {number[]} hours
 * @return {number}
 */
const countCompleteDayPairs = function(hours) {
  const hoursArrayLength = hours.length;
  let countAnswer = 0;
  
  for (let i = 0; i < hoursArrayLength; i++) {
    for (let k = i + 1; k < hoursArrayLength; k++) {
      if ((hours[i] + hours[k]) % 24 === 0) {
        countAnswer++;
      }
    }
  }
  
  const result = countAnswer;
  
  return result;
};