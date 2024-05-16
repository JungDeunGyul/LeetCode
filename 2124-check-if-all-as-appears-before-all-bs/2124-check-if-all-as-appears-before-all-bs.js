/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = function(s) {
  if (s.indexOf("b") === -1) {
    return true;
  }
  
  const checkA = s.lastIndexOf("a");
  const checkB = s.indexOf("b");
  
  if (checkA > checkB) {
    return false;
  } else {
    return true;
  }
};
