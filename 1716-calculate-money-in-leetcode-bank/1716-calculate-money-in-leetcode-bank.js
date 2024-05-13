/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function(n) {
  const countMoneyArray = [];
  let countMoney = 0;
  
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0 && i !== 0) {
      countMoney = countMoneyArray[i - 7] + 1;
    } else {
      countMoney++;
    }

    countMoneyArray.push(countMoney);
  }
  
  const result = countMoneyArray.reduce((prev, cur) => {
    return prev + cur;
  });

  return result;
};