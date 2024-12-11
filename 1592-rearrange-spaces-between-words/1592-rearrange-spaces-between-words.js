/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function(text) {
  const words = text.split(" ").filter(word => word !== "");
  const totalSpaces = text.length - words.join("").length;

  if (words.length === 1) {
    return words[0] + " ".repeat(totalSpaces);
  }

  const spacesBetweenWords = Math.floor(totalSpaces / (words.length - 1));
  const remainingSpaces = totalSpaces % (words.length - 1);

  return words.join(" ".repeat(spacesBetweenWords)) + " ".repeat(remainingSpaces);
};