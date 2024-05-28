/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function(arr) {
  const newMap = new Map();
  const luckyIntArr = [];
  
  for (const element of arr) {
    newMap[element] = newMap[element] ? newMap[element] + 1 : 1;
  }

  for (const element in newMap) {
    const eleToInt = Number.parseInt(element);
    
    if (eleToInt === newMap[element]) {
      luckyIntArr.push(eleToInt);
    }
  }

  if (luckyIntArr.at(-1)) {
    return luckyIntArr.at(-1);
  } else {
    return -1;
  }
};