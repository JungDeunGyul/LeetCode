/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function(title) {
  const titleSplit = title.split(" ");
  
  for (let i = 0; i < titleSplit.length; i++) {
    const strLength = titleSplit[i].length;
    if (strLength <= 2) {
      titleSplit[i] = titleSplit[i].toLowerCase();
    } else {
      titleSplit[i] = titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, strLength).toLowerCase();
    }
  }
  
  const result = titleSplit.join(" ");

  return result;
}
