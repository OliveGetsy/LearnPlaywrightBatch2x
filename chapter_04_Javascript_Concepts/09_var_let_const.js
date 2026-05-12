var v = 10;
let l = 20;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; // valid - var allows redeclaration
browser = "edge"; // valid - var allows reassignment

//for, functions
var testcases = ["Login", "Signup", "Logout"];
for (var i = 0; i < testcases.length; i++) {
    console.log("Running the Test:", testcases[i]);
}
console.log("Loop counter leaks outside the loop:", i); // i is accessible here due to var's function scope

console.log("Hi");
console.log("Hi");
console.log("Hi");
//To avoid this, repeating of console.log we can use functions
function say() {
    console.log("Hi from Function");
}
say();
say();// calling the function multiple times to print "Hi" without repeating the code

