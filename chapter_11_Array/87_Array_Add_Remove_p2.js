let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//Removes elements from an array and, 
// if necessary, inserts new elements in their place

arr.splice(2, 1);
console.log(arr);

arr.splice(2, 2);
console.log(arr);

arr.splice(2, 0, 90);
console.log(arr);

arr.splice(1, 1, 98);
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);