let year = 2004;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + "Leap year");
}
else {
    console.log(year + "Not a Leap year");
}