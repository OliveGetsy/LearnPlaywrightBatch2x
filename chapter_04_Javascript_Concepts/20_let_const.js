console.log(score); // undefined due to hoisting
console.log("Hai"); // This will execute before the ReferenceError is thrown
console.log("Hai");
console.log("Hai");
console.log("Hai");
console.log("Hai");
//TDZ for Score starts here
//console.log(score); // ReferenceError: Cannot access 'score' before initialization
//let score = 100;// ReferenceError: Cannot access 'score' before initialization
//type of score; // ReferenceError: Cannot access 'score' before initialization
//TDZ for Score ends here

let score = 100;// ReferenceError: Cannot access 'score' before initialization
var score = 100;// This will not throw an error due to hoisting, but it will be undefined until the line of declaration is executed.
const score = 100;// ReferenceError: Cannot access 'score' before initialization