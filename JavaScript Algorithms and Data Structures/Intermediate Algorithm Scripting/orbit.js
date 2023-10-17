function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    
    let orbits = [];
    for(let i = 0; i < arr.length; i++) {
      let a = earthRadius + arr[i]["avgAlt"];
      let t = 2 * Math.PI * Math.sqrt(a * a * a / GM);
      orbits.push({name: arr[i]["name"], orbitalPeriod: Math.round(t)});
    }
    return orbits;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

  /*Intermediate Algorithm Scripting Challenges
  Sum All Numbers in a Range
Diff Two Arrays
Seek and Destroy
Wherefore art thou
Spinal Tap Case
Pig Latin
Search and Replace
DNA Pairing
Missing letters
Sorted Union
Convert HTML Entities
Sum All Odd Fibonacci Numbers
Sum All Primes
Smallest Common Multiple
Drop it
Steamroller
Binary Agents
Everything Be True
Arguments Optional
Make a Person
Map the Debris*/