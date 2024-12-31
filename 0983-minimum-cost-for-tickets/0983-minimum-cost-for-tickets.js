/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (travelDays, ticketPrices) {
  const travelDaysSet = new Set(travelDays);
  const lastTravelDay = travelDays[travelDays.length - 1]; 
  const minCostUntilDay = new Array(lastTravelDay + 1).fill(0); 

  for (let day = 1; day <= lastTravelDay; day++) {
    if (!travelDaysSet.has(day)) {
      minCostUntilDay[day] = minCostUntilDay[day - 1];
      continue;
    }

    minCostUntilDay[day] = Math.min(
      minCostUntilDay[Math.max(0, day - 1)] + ticketPrices[0],
      minCostUntilDay[Math.max(0, day - 7)] + ticketPrices[1],
      minCostUntilDay[Math.max(0, day - 30)] + ticketPrices[2]
    );
  }

  return minCostUntilDay[lastTravelDay]; 
};