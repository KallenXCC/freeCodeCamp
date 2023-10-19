function convertToRoman(num) {
    let roman = "";
    let leftover = num;
    while(leftover >= 1000) {
      roman += 'M';
      leftover -= 1000;
    }
    if(leftover >= 900) {
      roman += 'CM';
      leftover -= 900;
    }
    if(leftover >= 500) {
      roman += 'D';
      leftover -= 500;
    }
    if(leftover >= 400) {
      roman += 'CD';
      leftover -= 400;
    }
    while(leftover >= 100) {
      roman += 'C';
      leftover -= 100;
    }
    if(leftover >= 90) {
      roman += 'XC';
      leftover -= 90;
    }
    if(leftover >= 50) {
      roman += 'L';
      leftover -= 50;
    }
    if(leftover >= 40) {
      roman += 'XL';
      leftover -= 40;
    }
    while(leftover >= 10) {
      roman += 'X';
      leftover -= 10;
    }
    if(leftover == 9) {
      roman += 'IX';
      leftover -= 9;
    }
    if(leftover >= 5) {
      roman += 'V';
      leftover -= 5;
    }
    if(leftover == 4) {
      roman += 'IV';
      leftover -= 4;
    }
    while(leftover >= 1) {
      roman += 'I';
      leftover -= 1;
    }
    return roman;
  }
  
  convertToRoman(36);