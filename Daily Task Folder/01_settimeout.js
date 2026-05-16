for (var i = 0; i < 3; i++) // setTimeout(() => console.log(i), 100);
{
    setTimeout(() => console.log(i), 100);// 3,3,3
    /* var is function-scoped, so the same 'i' variable is shared across all iterations of the loop. 
    By the time the setTimeout callbacks execute,
    the loop has completed and 'i' has been incremented to 3. 
    Therefore, all callbacks will log 3.*/
}

for (let j = 0; j < 3; j++) // setTimeout(() => console.log(j), 100);
{
    setTimeout(() => console.log(j), 100); // 0,1,2
    /* let is block-scoped, so each iteration of the loop
    creates a new 'j' variable that is scoped to that iteration. 
    When the setTimeout callbacks execute,
     they will log the value of 'j' 
     that was current during their respective iterations, 
    resulting in 0, 1, and 2 being logged.*/
}

console.log(score);

var score = 100;
console.log(score);

