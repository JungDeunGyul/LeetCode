/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function(s) {
  const bucketValue = {};

  for (let i = 0; i < s.length; i++) {
    bucketValue[s[i]] = bucketValue[s[i]] ? bucketValue[s[i]] + 1 : 1;
  }

  return areValueEqual(bucketValue);
};

const areValueEqual = (obj) => {
  const values = Object.values(obj);

  return values.every(value => value === values[0]);
}
