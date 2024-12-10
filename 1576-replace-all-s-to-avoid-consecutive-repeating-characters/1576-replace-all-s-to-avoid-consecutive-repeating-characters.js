/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function(s) {
  const splitS = s.split("");

  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i] === "?") {
      for (const char of "abcdefghijklmnopqrstuvwxyz") {
        if (
          (i > 0 && splitS[i - 1] === char) ||
          (i < splitS.length - 1 && splitS[i + 1] === char)
        ) {
          continue;
        }

        splitS[i] = char;
        break;
      }
    }
  }

  return splitS.join("");
};