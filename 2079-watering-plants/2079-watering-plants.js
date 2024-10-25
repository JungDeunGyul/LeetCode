/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = function(plants, capacity) {
  let steps = 0;
  let waterCapacity = capacity;

  for (let i = 0; i < plants.length; i++) {
    if (waterCapacity >= plants[i]) {
      steps += 1;
      waterCapacity -= plants[i];
    } else {
      steps += i + i + 1;
      waterCapacity = capacity;
      waterCapacity -= plants[i];
    }
  }
  
  return steps;
};