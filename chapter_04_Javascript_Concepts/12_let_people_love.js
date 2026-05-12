//let-blocked scope
let a = 10; // Global scope variable

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Login Attempt:", retryCount); // Login Attempt: 2

let retryCount = 5;
//SyntaxError: Identifier 'retryCount' has already been declared

//Block scope with let

let testStatus = "pending";
if (testStatus === "pending") {
    let executionTime = "1200";
    console.log("Inside Block:" + executionTime); // Inside Block:1200
}
console.log("Outside Block:" + executionTime); // ReferenceError: executionTime is not defined

let name = "pending";
name = "passed";// Allowed, as 'name' is declared with 'let'