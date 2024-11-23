/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = function(firstWord, secondWord, targetWord) {
  const alphabetBucket = {
    a: "0", b: "1", c: "2", d: "3", e: "4",
    f: "5", g: "6", h: "7", i: "8", j: "9",
    k: "10", l: "11", m: "12", n: "13", o: "14",
    p: "15", q: "16", r: "17", s: "18", t: "19",
    u: "20", v: "21", w: "22", x: "23", y: "24", z: "25"
  };

  const worldToStrNumber = (word) => {
    let strNumber = "";

    for (let i = 0; i < word.length; i++) {
      strNumber += alphabetBucket[word[i]];
    }

    return Number(strNumber);
  } 

  const firstNum = worldToStrNumber(firstWord);
  const secondNum = worldToStrNumber(secondWord);
  const targetNum = worldToStrNumber(targetWord);

  if (firstNum + secondNum === targetNum) {
    return true;
  } else {
    return false;
  }
};
