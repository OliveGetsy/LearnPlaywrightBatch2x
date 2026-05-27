let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf - returns first matching index
results.indexOf("fail"); // 1
results.indexOf("skip"); // -1

// lastIndexOf - returns last matching index
results.lastIndexOf("fail"); // 4

// includes - returns boolean
results.includes("error"); // true
results.includes("skip");  // false


let numbs = [10, 20, 30, 46];

// find - returns first matching value
let r = numbs.find(x => x > 20);
console.log(r); // 30


// findIndex - returns first matching index
let s = numbs.findIndex(n => n > 20);
console.log(s); // 2


// findLast - returns last matching value
let s1 = numbs.findLast(n => n > 20);
console.log(s1); // 46