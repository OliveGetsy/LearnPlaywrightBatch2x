let arr = [1, 2, 3];
console.log(arr);


//Add to End
arr.push(4);
console.log(arr);

//Remove from End
arr.pop(4);
console.log(arr);

arr.push(5, 6);
console.log(arr);

//Add at the begining
arr.unshift(0);
console.log(arr);

//Remove from the begining
arr.shift();
console.log(arr);

// Add 30 at index 2
arr.splice(2, 0, 10);

console.log(arr);
