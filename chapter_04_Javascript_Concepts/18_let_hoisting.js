console.log(score); // undefined due to hoisting
let score = 100;// ReferenceError: Cannot access 'score' before initialization


{//TDZ: 2024-06-01
    //-------TDZ for Score starts here--------
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    //let score = 100;// ReferenceError: Cannot access 'score' before initialization
    //type of score; // ReferenceError: Cannot access 'score' before initialization
    //-------TDZ for Score ends here--------
    console.log(score); // undefined due to hoisting
    let score = 100;// ReferenceError: Cannot access 'score' before initialization
}
