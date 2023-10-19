function checkCashRegister(price, cash, cid) {
    let register = {status: "PENDING", change: []};
    let change = cash - price;
    if(change < 0) {
      console.log("INSUFFICIENT CASH");
      return undefined;
    }
    if(cid.length != 9) {
      console.log("INVALID REGISTER");
      return undefined;
    }
  
    /* INDEX: PENNY 0, NICKEL 1, DIME 2, QUARTER 3,
    ONE 4, FIVE 5, TEN 6, TWENTY 7, ONE HUNDRED 8 */
    let pennyVal = cid[0][1];
    let nickelVal = cid[1][1];
    let dimeVal = cid[2][1];
    let quarterVal = cid[3][1];
    let oneVal = cid[4][1];
    let fiveVal = cid[5][1];
    let tenVal = cid[6][1];
    let twentyVal = cid[7][1];
    let hundredVal = cid[8][1];
    let registerTotal = pennyVal + nickelVal + dimeVal + quarterVal + oneVal + fiveVal + tenVal + twentyVal + hundredVal;
  
    if(registerTotal < change) {
      register["status"] = "INSUFFICIENT_FUNDS";
      return register;
    }
    if(registerTotal == change) {
      register["status"] = "CLOSED";
      register["change"] = cid;
      return register;
    }
  
    let registerChange = [];
    let hundredChange = 0;
    while(change >= 100 && hundredVal >= 100) {
      hundredChange += 100;
      change -= 100;
      hundredVal -= 100;
    }
    if(hundredChange > 0) {
      registerChange.push(["HUNDRED", hundredChange]);
    }
    let twentyChange = 0;
    while(change >= 20 && twentyVal >= 20) {
      twentyChange += 20;
      change -= 20;
      twentyVal -=20;
    }
    if(twentyChange > 0) {
      registerChange.push(["TWENTY", twentyChange]);
    }
    let tenChange = 0;
    while(change >= 10 && tenVal >= 10) {
      tenChange += 10;
      change -= 10;
      tenVal -= 10;
    }
    if(tenChange > 0) {
      registerChange.push(["TEN", tenChange]);
    }
    let fiveChange = 0;
    while(change >= 5 && fiveVal >= 5) {
      fiveChange += 5;
      change -= 5;
      fiveVal -= 5;
    }
    if(fiveChange > 0) {
      registerChange.push(["FIVE", fiveChange]);
    }
    let oneChange = 0;
    while(change >= 1 && oneVal >= 1) {
      oneChange += 1;
      change -= 1;
      oneVal -= 1;
    }
    if(oneChange > 0) {
      registerChange.push(["ONE", oneChange]);
    }
    let quarterChange = 0;
    while(change >= 0.25 && quarterVal >= 0.25) {
      quarterChange += 0.25;
      change -= 0.25;
      quarterVal -= 0.25;
    }
    if(quarterChange > 0) {
      registerChange.push(["QUARTER", quarterChange]);
    }
    let dimeChange = 0;
    while(change >= 0.1 && dimeVal >= 0.1) {
      dimeChange += 0.1;
      change -= 0.1;
      dimeVal -= 0.1;
    }
    if(dimeChange > 0) {
      registerChange.push(["DIME", dimeChange]);
    }
    let nickelChange = 0;
    while(change >= 0.05 && nickelVal >= 0.05) {
      nickelChange += 0.05;
      change -= 0.05;
      nickelVal -= 0.05;
    }
    if(nickelChange > 0) {
      registerChange.push(["NICKEL", nickelChange]);
    }
    let pennyChange = 0;
    while(change >= 0.009 && pennyVal >= 0.009) {
      pennyChange += 0.01;
      change -= 0.01;
      pennyVal -= 0.01;
    }
    if(pennyChange > 0) {
      registerChange.push(["PENNY", pennyChange]);
    }
  
    if(change > 0) {
      register["status"] = "INSUFFICIENT_FUNDS";
      return register;
    }
  
    register["status"] = "OPEN";
    register["change"] = registerChange;
    return register;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);