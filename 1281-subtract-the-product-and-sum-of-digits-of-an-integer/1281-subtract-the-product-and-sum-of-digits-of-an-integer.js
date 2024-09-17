/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  const numStrArray = String(n).split("");
  
  const sumNum = numStrArray.reduce((prev, cur)=>{
    return Number(prev) + Number(cur);
	})
  
  const multiNum = numStrArray.reduce((prev, cur)=>{
    return Number(prev) * Number(cur);
	})
  
  const result = multiNum - sumNum;
  
  return result;
};