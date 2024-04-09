/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function(tickets, k) {
  const ticketsArrayLength = tickets.length;
  let answer = 0;
  
  while(tickets[k] !== 0) {
    for (let i = 0; i < ticketsArrayLength; i++) {
      if (tickets[i] === 0) {
        continue;
      }
      
      if (tickets[k] === 0) {
        break;
      }
      
      tickets[i] --;
      answer ++;
    }
  }
  
  return answer;
};