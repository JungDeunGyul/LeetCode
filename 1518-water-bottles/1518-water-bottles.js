/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
  let copyNumBottles = numBottles;
  let accumulateBottles = copyNumBottles;
  
  while (copyNumBottles >= numExchange) {
    const exchangeBottle = Math.floor(copyNumBottles / numExchange);
    accumulateBottles += exchangeBottle;
    
    copyNumBottles = exchangeBottle + (copyNumBottles % numExchange);
  }
  
  return accumulateBottles;
};