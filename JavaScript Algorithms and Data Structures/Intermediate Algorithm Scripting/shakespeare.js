function whatIsInAName(collection, source) {
    return collection.filter(colObj => Object.keys(source).every(key => colObj[key] === source[key]));
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });