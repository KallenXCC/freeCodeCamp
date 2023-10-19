function rot13(str) {
    const A = 'A';
    const Z = 'Z';
    const AlphaCodeMin = A.charCodeAt(0);
    const AlphaCodeMax = Z.charCodeAt(0);
  
    let alphaRegex = /[A-Z]/;
    let decoded = "";
    let charCode = 0;
    for(let i = 0; i < str.length; i++) {
      if(alphaRegex.test(str.at(i))) {
        charCode = str.charCodeAt(i) - 13;
        if(charCode < AlphaCodeMin) {
          charCode = charCode - AlphaCodeMin + AlphaCodeMax + 1;
        }
        decoded += String.fromCharCode(charCode);
      } else {
        decoded += str.at(i);
      }
    }
    console.log(decoded);
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");