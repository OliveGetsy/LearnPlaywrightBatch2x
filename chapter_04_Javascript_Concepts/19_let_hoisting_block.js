//let is block scoped and hoisted but not initialized until the line of declaration is executed. This creates a Temporal Dead Zone (TDZ) from the start of the block until the declaration is encountered, where accessing the variable will result in a ReferenceError.
let x = "global";
if (true) {
    // TDZ for block-scoped variable 'x' starts here
    //console.log(x); // ReferenceError:(Not global 'x' is in TDZ), gobacl will not come becuase it is block scope
    console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = "block";
    console.log(x); // Output: "block"
}