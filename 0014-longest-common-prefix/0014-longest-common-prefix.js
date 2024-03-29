/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const copyStrsArray = [...strs];
  
  let prefix = copyStrsArray[0];
  
  for (let i = 1; i < copyStrsArray.length; i++) {
    while (copyStrsArray[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}