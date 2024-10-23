/**
 * @param {number} n
 * @return {string[]}
 */
const validStrings = function(n) {
  const result = [];

  function dfs(current) {
    if (current.length === n) {
      result.push(current);
      return;
    }

    dfs(current + "1");

    if (current.length === 0 || current[current.length - 1] === "1") {
      dfs(current + "0");
    }
  }

  dfs("");
  
  return result;
};