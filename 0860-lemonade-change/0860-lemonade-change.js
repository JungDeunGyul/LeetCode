/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  let fiveDollar = 0;
  let tenDollar = 0;
  
  for (const bill of bills) {
    switch (bill) {
      case 5:
        fiveDollar++;
        
        break;
      case 10:
        if (fiveDollar > 0) {
          fiveDollar--;
          tenDollar++;
        } else {
          return false;
        }
    
        break;
      case 20:
        if (tenDollar > 0 && fiveDollar > 0) {
          fiveDollar--;
          tenDollar--;
        } else if (fiveDollar >= 3) {
          fiveDollar -= 3;
        } else {
          return false;
        }
        
        break;
    }
  }
  
  return true;
};
