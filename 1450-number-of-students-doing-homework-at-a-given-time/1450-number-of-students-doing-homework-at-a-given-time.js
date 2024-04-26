/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function(startTime, endTime, queryTime) {
  const startTimeLength = startTime.length;
  let result = 0;
  
  for (let i = 0; i < startTimeLength; i ++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      result ++;
    }
  }
  
  return result;
};