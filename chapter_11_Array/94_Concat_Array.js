let a = [1, 2];
let b = [3, 5];
//let c = a + b;
//Wrong concat result like 1,23,5
let c = a.concat(b)
console.log(c);


//Spread Modern way
let d = [...a, ...b];
console.log(d);

let s = ["pass", "fail", "skip"].join("-");
console.log(s);
