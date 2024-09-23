/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
const sortTheStudents = function(score, k) {
  score.sort((a, b) => b[k] - a[k]);
  
  return score;
};