/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = function(celsius) {
  const result = [celsius + 273.15, celsius * 1.8 + 32];  
  
  return result;
};