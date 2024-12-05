/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
const canChange = function(start, target) {
  const startPositions = [];
  const targetPositions = [];

  function organizePosition(arr, bucketArray) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "L" || arr[i] === "R") {
        bucketArray.push({char: arr[i], index: i});
      }
    }
  }

  organizePosition(start, startPositions);
  organizePosition(target, targetPositions);

  if (startPositions.length !== targetPositions.length) {
    return false;
  }

  for (let i = 0; i < startPositions.length; i++) {
    if (startPositions[i].char !== targetPositions[i].char) {
      return false;
    }
  }

  for (let i = 0; i < startPositions.length; i++) {
    const { char, index: startIndex } = startPositions[i];
    const targetIndex = targetPositions[i].index;

    if (
      (char === "L" && targetIndex > startIndex) ||
      (char === "R" && targetIndex < startIndex)
    ) {
      return false;
    }
  }

  return true;
};