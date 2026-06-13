let value = "5";
console.log(typeof value);

switch (value) {
    case 5:
        console.log("The number 5 is numeric");
        break;

    case "5":
        console.log("The  5 is string");
        break;
}

let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 is matched");
        break;

}