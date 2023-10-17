function steamrollArray(arr) {
    let flat = [];
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        flat.push(...steamrollArray(arr[i]));
      } else {
        flat.push(arr[i]);
      }
    }
    return flat;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));