function titleCase(str) {
    let title = '';
    let letter = str[0];
    console.log(str[0]);
    title+=letter.toUpperCase();
    for(let i = 0; i < str.length - 1; i++) {
      letter = str[i+1];
      if(str[i] == ' ') {
        title+=letter.toUpperCase();
      } else {
        title+=letter.toLowerCase();
      }
    }
    console.log(title);
    return title;
  }
  
  titleCase("I'm a little tea pot");