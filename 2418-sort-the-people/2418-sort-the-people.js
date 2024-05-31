/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function(names, heights) {
  const people = names.map((name, index) => [name, heights[index]]);

  people.sort((a, b) => b[1] - a[1]);

  const sortedNames = people.map(person => person[0]);

  return sortedNames;
};