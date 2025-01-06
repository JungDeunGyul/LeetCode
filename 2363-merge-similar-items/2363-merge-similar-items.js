/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
const mergeSimilarItems = function(items1, items2) {
  const weightMap = new Map();

  for (const [value, weight] of [...items1, ...items2]) {
    weightMap.set(value, (weightMap.get(value) || 0) + weight);
  }

  const result = Array.from(weightMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([value, weight]) => [value, weight]);

  return result;
};