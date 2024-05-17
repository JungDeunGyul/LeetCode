/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function(operations) {
  const countScoreArray = [];
  const operationsLength = operations.length;
  
  for (let i = 0; i < operationsLength; i++) {
    const countScoreArrayLastIndex = countScoreArray.length - 1;
    if (operations[i] === "C") {
      countScoreArray.pop();
    } else if (operations[i] === "D") {
      countScoreArray.push(countScoreArray[countScoreArrayLastIndex] * 2);
    } else if (operations[i] === "+") {
      const sum = countScoreArray[countScoreArrayLastIndex] + countScoreArray[countScoreArrayLastIndex - 1]
      countScoreArray.push(sum);
    } else {
      countScoreArray.push(Number(operations[i]));
    }
  }
  
  if (countScoreArray.length === 0) {
    return 0;
  }
  console.log(countScoreArray)
  const result = countScoreArray.reduce((a, b) => (a + b));

  return result;
};