var a = 10;
//var is actually a function-scoped variable declaration, 


console.log(a); // 10 //Global scope variable

function printHello() {
    console.log("Hello Testing Academy");
    var a = 20; // Local scope variable
    console.log(a); // 20
    if (true) {
        var a = 30; // This will overwrite the previous 'a' in the function scope
        console.log(a); // 30
    }
    //var==trump,flipper, dual face,trust issue
    console.log("F--->", a); // 30   
}
console.log("G--->", a);// 10
printHello(); // Hello Testing Academy

