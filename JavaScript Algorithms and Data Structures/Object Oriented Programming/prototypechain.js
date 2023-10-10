function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  console.log(typeof Dog); //function
  console.log(typeof Dog.prototype); //object
  console.log(typeof Function); //function
  console.log(typeof Function.prototype); //function
  console.log(typeof Object); //function
  console.log(typeof Object.prototype); //object
  console.log(Object.isPrototypeOf(Dog)); //false
  console.log(Object.prototype.isPrototypeOf(Dog)); //true
  console.log(Object.prototype.isPrototypeOf(Dog.prototype)); //true
  
  Object.prototype.isPrototypeOf(Dog.prototype);