//Multiple if and else->Nested if
let isLoggedIn = true;
let role = "Editor";

if (isLoggedIn) {
    if (role === "Admin") {
        console.log("Able to do any activity");
    }
    else if (role === "Editor") {
        console.log("Able to do editing");
    }
    else if (role === "Viewer") {
        console.log("Able to view not able to edit");
    }
    else {
        console.log("User may be guest user");
    }
}
else {
    console.log("You do not have proper login");
}