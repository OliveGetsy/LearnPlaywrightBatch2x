// null vs undefined in JavaScript

// undefined means a value has not been assigned yet.
let a;
console.log(a); // undefined

// null means a value is intentionally empty.
let b = null;
console.log(b); // null

// Simple difference:
// - undefined: JavaScript did not find a value.
// - null: the programmer set the value to "nothing".

// Example with function:
function greet(name) {
    if (name === undefined) {
        return 'Hello, guest!'; // name was not provided
    }
    if (name === null) {
        return 'Hello, stranger!';// name was explicitly set to null
    }
    return `Hello, ${name}!`;
}

console.log(greet()); // Hello, guest!
console.log(greet(null)); // Hello, stranger!
console.log(greet('Sam')); // Hello, Sam!

// Note: undefined and null are different types.
console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (this is a JavaScript quirk)

//null
let profilePicture = null; // No profile picture assigned yet
console.log(profilePicture); // null
console.log(typeof profilePicture); // "object" (null is considered an object in JavaScript)    

let score = 100;
score = null; // Score is intentionally set to null, meaning no score available
console.log(score); // null

/* Simple Definition:
- undefined: A variable that has been declared but not assigned a value.
- null: A variable that has been assigned a value of "nothing" or "no value". 
    */

let userName; // userName is declared but not assigned, so it's undefined;  
console.log(userName); // undefined
console