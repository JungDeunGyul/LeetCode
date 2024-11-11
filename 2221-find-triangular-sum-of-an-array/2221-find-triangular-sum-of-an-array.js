/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = function(nums) {
  let copyNumsArr = [...nums]

  while (copyNumsArr.length > 1) {
    const sumArray = [];

    for (let i = 0; i < copyNumsArr.length - 1; i++) {
      const sumTwoArrayEl = copyNumsArr[i] + copyNumsArr[i + 1];

      if (sumTwoArrayEl < 10) {
        sumArray.push(sumTwoArrayEl)
      } else {
        sumArray.push(sumTwoArrayEl - 10)
      }
    }

    copyNumsArr = sumArray;
  }

  const result = copyNumsArr[0];

  return result;
};