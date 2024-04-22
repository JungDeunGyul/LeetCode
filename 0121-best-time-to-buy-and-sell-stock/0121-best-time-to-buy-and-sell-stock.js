/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  const pricesArrayLength = prices.length;
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < pricesArrayLength; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};