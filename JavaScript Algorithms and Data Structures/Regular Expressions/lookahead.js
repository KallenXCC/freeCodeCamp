let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/; // match passwords that are greater than 5 characters long, and have two consecutive digits
let result = pwRegex.test(sampleWord);