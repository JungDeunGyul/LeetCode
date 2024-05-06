/**
 * @param {number[]} mountain
 * @return {number[]}
 */
const findPeaks = function(mountain) {
  const result = [];
  
  const mountainLength = mountain.length;
  
  for (let i = 1; i < mountainLength - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      result.push(i);
    }
  }
  
  return result;
};