/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function(students, sandwiches) {
  const count = [0, 0];

  for (const preference of students) {
    count[preference]++;
  }
  
  for (const sandwich of sandwiches) {
    if (count[sandwich] === 0) {
      break;
    }
    count[sandwich]--;
  }
  
  const result = count[0] + count[1];
  
  return result;
};