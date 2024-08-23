/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function(arr1, arr2, d) {
  let count = 0;
  
  for (const arr1Num of arr1) {
    let toBeCounted = true;
    
    for (const arr2Num of arr2) {
      if (Math.abs(arr1Num - arr2Num) <= d) {
        toBeCounted = false;
        
        break;
      }
    }
    
    if (toBeCounted) {
      count++;
    }
  }
  
  return count;
};
