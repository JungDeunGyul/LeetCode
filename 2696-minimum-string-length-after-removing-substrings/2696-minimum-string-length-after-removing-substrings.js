/**
 * @param {string} s
 * @return {number}
 */
const minLength = function(s) {
  const arr = s.split("");
  
  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] === "A" && arr[i + 1] === "B") ||
        (arr[i] === "C" && arr[i + 1] === "D")
       ) {
      arr.splice(i, 2);
      i = -1; 
    }
  }
  
  return arr.length;
};