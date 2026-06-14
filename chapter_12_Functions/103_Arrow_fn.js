const greet = function (name1) {
    return name1
}

let result = greet("tim");
console.log(result);


const greet2 = (name1) => name1;
let result1 = greet("Tom");
console.log(result1);

const double = n => n * 2;
console.log(double(10));

const printIt = name => console.log(name);
printIt("Winster");