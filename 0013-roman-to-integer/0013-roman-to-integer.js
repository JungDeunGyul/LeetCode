/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const sLength = s.length;
  const obj = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10, 
    "V": 5,
    "I": 1
  };

  let total = 0;

  for (let i = 0; i < sLength; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
        total -= obj[s[i]];
    } else {
        total += obj[s[i]];
    }
  }
  
  return total;
};