/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {  
  const getStrCount = (str) => {
    const newMap = new Map();
    
    for (let i = 0; i < str.length; i++) {
      newMap[str[i]] = newMap[str[i]] ? newMap[str[i]] + 1 : 1;
    }
    
    return newMap;
  }
  
  const ransomNoteMap = getStrCount(ransomNote);
  const magazineMap = getStrCount(magazine);
  
  for (const key in ransomNoteMap) {
    if (ransomNoteMap[key] > magazineMap[key] || magazineMap[key] === undefined) {
      return false;
    }
  }
  
  return true;
};