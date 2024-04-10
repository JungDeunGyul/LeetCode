/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b);

  const deckLength = deck.length;
  const result = new Array(deckLength).fill(0);

  const indexQueue = [];
  for (let i = 0; i < deckLength; i++) {
    indexQueue.push(i);
  }

  for (const card of deck) {
    result[indexQueue.shift()] = card;

    if (indexQueue.length > 0) {
      indexQueue.push(indexQueue.shift());
    }
  }

  return result;  
};