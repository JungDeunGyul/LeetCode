/**
 * @param {string} s
 * @return {number}
 */
const minimumChairs = function(s) {
  let maxChairs = 0;
  let currentChairs = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "E") {
      currentChairs++;
      if (currentChairs > maxChairs) {
        maxChairs = currentChairs;
      }
    } else if (s[i] === "L") {
      currentChairs--;
    }
  }

  return maxChairs; 
};