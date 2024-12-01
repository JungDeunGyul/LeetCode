/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
  for (const el of arr) {
    const checkCurrentIndex = arr.indexOf(el * 2);

    if (checkCurrentIndex !== -1) {
      if (checkCurrentIndex === arr.lastIndexOf(el)) {
        continue;
      }

      return true;
    }
  }

  return false;
};