const Base_URL = "https://app.thetestingacademy.com/";
Base_URL = "https://staging.thetestingacademy.com/";
// TypeError: Assignment to constant variable.
//Redeclaring a constant variable is not allowed

let name = "pending";
name = "passed";// Allowed, as 'name' is declared with 'let'
name == "passed"; // true
{
    let name = "Failed";// Block scope variable
}