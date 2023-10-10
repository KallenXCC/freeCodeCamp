function chunkArrayInGroups(arr, size) {
    const chunked = [];
    let currSubInd = 0;
    let subArr = [];
    for(let i = 0; i < arr.length; i++) {
      if(currSubInd == size) {
        chunked.push(subArr);
        subArr = [];
        currSubInd = 0;
      }
      subArr.push(arr[i]);
      currSubInd++;
    }
    if(subArr.length > 0) {
      chunked.push(subArr);
    }
    console.log(arr);
    console.log(size);
    console.log(chunked);
    return chunked;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*Basic Algorithm Exercises:
Convert Celsius to Fahrenheit
Reverse a String
Factorialize a Number
Find the Longest Word in a String
Return Largest Numbers in Arrays
Confirm the Ending
Repeat a String Repeat a String
Truncate a String
Finders Keepers
Boo who
Title Case a Sentence
Slice and Splice
Falsy Bouncer
Where do I Belong
Mutations
Chunky Monkey*/