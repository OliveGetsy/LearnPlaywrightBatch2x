//Checking arrays

//Check something is missing in array

let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("a");
console.log(result1);

[80, 90, 95].every(s => s >= 70);//true
[80, 60, 85].every(s => s >= 70);//false

//some atleast one must pass
[80, 90, 95].some(s => s < 70);//true
[80, 60, 85].some(s => s < 70);//false