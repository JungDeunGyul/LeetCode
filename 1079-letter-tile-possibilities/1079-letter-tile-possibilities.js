/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = function (tiles) {
  const possibleSequence = new Set();

  function generatePermutations(str, used) {
    possibleSequence.add(str);

    for (let i = 0; i < tiles.length; i++) {
      if (used[i] || (tiles[i] === tiles[i - 1] && !used[i - 1])) {
        continue;
      }

      used[i] = true;
      generatePermutations(str + tiles[i], used);
      used[i] = false;
    }
  }

  generatePermutations("", Array(tiles.length).fill(false));

  const result = possibleSequence.size - 1;

  return result;
};