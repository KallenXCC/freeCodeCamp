function telephoneCheck(str) {
    let leftParIndex = str.search(/\(/);
    let rightParIndex = str.search(/\)/);
    if(leftParIndex >= 0 || rightParIndex >= 0) {
      if(rightParIndex - leftParIndex != 4) {
        return false;
      }
    }
    let phoneRegexWith1 = /^1? ?\(?\d{3}-?\)? ?\d{3}-? ?\d{4}$/;
    let phoneRegexNo1 = /^\(?\d{3}-?\)? ?\d{3}-? ?\d{4}$/;
    if(phoneRegexWith1.test(str) || phoneRegexNo1.test(str)) {
      return true;
    }
    return false;
  }
  
  
  telephoneCheck("555-555-5555");