/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = function(s) {
  const splitS = s.split("");

  for (let i = 0; i < splitS.length - 2; i++) {
    if (splitS[i] === splitS[i + 1] && splitS[i + 1] === splitS[i + 2]) {
      splitS[i] = "";
    }
  }

  const result = splitS.join("");
  
  return result;
};