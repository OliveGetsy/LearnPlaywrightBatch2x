function getUserStatus() {
    //var status_code; // This declaration is hoisted to the top of the function scope
    console.log(status_code); // undefined due to hoisting
    var status_code = "Active";
    console.log(status_code); // Active

}
getUserStatus();
//Note: In JavaScript, variable declarations (using var) are hoisted to the top of their scope, but their assignments are not. This means that the variable status_code is declared at the top of the function getUserStatus, but it is initialized with undefined until the line where it is assigned "Active".