const Person = function(first, last) {
    let firstName = first;
    let lastName = last;
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return this.getFirstName() + ' ' + this.getLastName();
    };
    this.setFirstName = function(first) {
      firstName = first;
    };
    this.setLastName = function(last) {
      lastName = last;
    };
    this.setFullName = function(first, last) {
      firstName = first;
      lastName = last;
      return this.getFullName();
    };
  };
  
  let him = new Person('Bob', 'Ross');
  console.log(Object.keys(him).length);
  console.log(him.getFullName());

  //object construction best practices