function greet(name) {
    console.log("Hello " + name);
}

greet("Olive");
/*
Input  : "John"
Output : Nothing returned
Action : Prints greeting
"Olive" ->greet(name)->Print Hello John->End
*/
let result = greet("Tom");
console.log(result);

function beggar(money) {
    console.log("thanks", money);
}
let returnMoney = beggar(100);
console.log(returnMoney)