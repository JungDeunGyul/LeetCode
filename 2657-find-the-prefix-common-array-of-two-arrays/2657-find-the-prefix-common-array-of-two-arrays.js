/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function(A, B) {
  const result = [];
  const seenA = new Set();
  const seenB = new Set();

  let commonCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      commonCount++;
    }
    if (seenB.has(A[i])) {
      commonCount++;
    }
    if (seenA.has(B[i])) {
      commonCount++;
    }

    seenA.add(A[i]);
    seenB.add(B[i]);

    result.push(commonCount);
  }

  return result;
};