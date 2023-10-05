let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.*?)(\s+)$/; // find whitespace
let result = hello.replace(wsRegex, '$2'); // removes whitespace
console.log(result);