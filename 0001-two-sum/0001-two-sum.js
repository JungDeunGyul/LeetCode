/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const numIndices = {};
  const copyNumsArray = [...nums];

  for (let i = 0; i < copyNumsArray.length; i++) {
    const findNum = target - copyNumsArray[i];

    if (numIndices[findNum] !== undefined) {
      return [numIndices[findNum], i];
    }

    numIndices[copyNumsArray[i]] = i;
  }
};