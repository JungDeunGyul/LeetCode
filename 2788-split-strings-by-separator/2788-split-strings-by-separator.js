/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
const splitWordsBySeparator = function(words, separator) {
  const result = [];
  
  for (const el of words) {
    const splitEl = el.split(separator);
    
    for (const el of splitEl) {
      if (el) {
        result.push(el);
      }
    }
  }
  
  return result;
};