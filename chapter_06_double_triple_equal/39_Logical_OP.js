//&& -> AND
//|| -> OR
//! -> NOT

let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // true    

console.log(5 != "0"); // true (5 is not equal to "0")
console.log(5 !== "0"); // true (5 is not strictly equal to "0")  
console.log(5 != 5); // false (5 is equal to 5)
console.log(5 !== 5); // false (5 is strictly equal to 5)