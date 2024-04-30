/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function(target, arr) {
  const targetSort = target.sort();
  const arrSort = arr.sort();
  const targetLength = target.length;
  
  for (let i = 0; i < targetLength; i++) {
    if (targetSort[i] !== arrSort[i]) {
      return false;
    }
  }

  return true;
};