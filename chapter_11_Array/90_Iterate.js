let test = ["login", "checkout", "search"];

for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
}

console.log("...................");

for (tests of test) {
    console.log(tests);

}
console.log("...................");

test.forEach((tests, index) => {
    console.log(tests, index);
});

let students = ["mathew", "Rajes", "Pinky", "Will"];
for (let student in students) {
    console.log(student, "->", students[student]);

}
console.log("...................");

