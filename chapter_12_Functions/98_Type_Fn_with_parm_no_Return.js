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
function greetByName(name) {
    console.log("Hi", name);
}
greetByName("Olive");
let result = greetByName("Augustin");
console.log(result);

function beggar(money) {
    console.log("thanks", money);
}
let returnMoney = beggar(100);
console.log(returnMoney)