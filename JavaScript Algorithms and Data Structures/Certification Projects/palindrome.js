function palindrome(str) {
    let alphaNumRegex = /[a-zA-Z0-9]/;
    let alphaNumStr = "";
    for(let i = 0; i < str.length; i++) {
      if(alphaNumRegex.test(str.at(i))) {
        alphaNumStr += str.at(i).toLowerCase();
      }
    }
    for(let i = 0; i < alphaNumStr.length / 2; i++) {
      if(alphaNumStr.at(i) != alphaNumStr.at(alphaNumStr.length - 1 - i)) {
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");