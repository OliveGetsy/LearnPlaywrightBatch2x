//Creating Array 
//Array Literals (preferred)

let browsers = ["Chrome", "Firefox", "Edge"];

//Array Constructor
let scores = new Array(3);
//JavaScript creates an array with length 3, but without actual values inside.
let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

let test = Array.of(10, 20, 30, 40);
console.log(test);

let chars = Array.from("hello");
console.log(chars);

let num = Array.from("123456");
console.log(num);