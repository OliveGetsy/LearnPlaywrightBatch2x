let a = 10;
//let is actually a block-scoped variable declaration,

console.log(a); // 10 //Global scope variable //It is loyal

function printHello() {
    console.log("Hello Testing Academy");
    let a = 20; // Local scope variable
    console.log(a); // 20
    if (true) {
        let a = 30; // This will not overwrite the previous 'a' in the function scope, it is block-scoped
        console.log(a); // 30
    }
    //var==trump,flipper, dual face,trust issue
    console.log("F--->", a); // 30   
}
console.log("G--->", a);// 10
printHello(); // Hello Testing Academy

