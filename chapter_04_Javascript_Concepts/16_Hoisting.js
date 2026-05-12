//JS Engine
//LINE By Line execution //Compilation + Interpretation
console.log(greeting);
var greeting = "Hello";//
// Hoisting: JavaScript moves variable and function declarations
//  to the top of their scope before execution.
console.log(greeting); // Hello

//var greeting;<--Hoisted with undefined
//console.log(greeting); // undefined   
greeting = "Hello";
console.log(greeting); // Hello

console.log(a); // 
var a = "Olive";
console.log(a); // Olive