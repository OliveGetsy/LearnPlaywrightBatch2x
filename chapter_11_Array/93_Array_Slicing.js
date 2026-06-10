//Slicing and Combining
// slice(start, end)
// Returns a new array
// Does NOT change the original array
// Takes elements from start index to end-1 index
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));//start, end-1

console.log(arr.slice(2, 4));

console.log(arr.slice(2, 5));

console.log(arr.slice(2));

console.log(arr.slice(-2));


let arra = [10, 20, 30, 40, 50];
let s = arra.slice(1, 4);
console.log(arra);
console.log(s);


let arra1 = [10, 20, 30, 40, 50];
let removed = arra1.splice(1, 3);
console.log(arra1);
console.log(removed);