let score = [45, 78, 89, 67, 70];
//map transfor every elemet
let grades = score.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

let passing = score.filter(s => s > 70);
console.log(passing);

let total = score.reduce((a, b) => a + b, 0);
console.log(total);

let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());


