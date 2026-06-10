let fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits);

let numbers = [3, 1, 4];
numbers.sort();
console.log(numbers);

let numbs = [10, 1, 21, 2];
numbs.sort();
console.log(numbs);//natural or lexical sorting
numbs.sort((a, b) => a - b);//ascending sort
console.log(numbs);
numbs.sort((a, b) => b - a);//descending sort
console.log(numbs);

