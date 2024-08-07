/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let countFlower = 0;
  
  if (flowerbed[0] === 0 && flowerbed[1] === 0 || flowerbed[0] === 0 && flowerbed.length === 1) {
    countFlower++;
    flowerbed[0] = 1;
  }
  
  for (let i = 1; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)) {
      countFlower++;
      flowerbed[i] = 1;
    }
  }
  
  const result = countFlower >= n;
  
  return result;
};