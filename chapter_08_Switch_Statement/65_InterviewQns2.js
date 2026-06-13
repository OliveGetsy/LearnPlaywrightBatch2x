let testScore = 85;

switch (true) {
    case testScore >= 95:
        console.log("Outstanding - Top Performer");
        break;

    case testScore >= 85:
        console.log("Excellent- Above Expectation");
        break;

    case testScore >= 70:
        console.log("Good - Meets Expectation");
        break;
    case testScore >= 50:
        console.log("Ok - satisfactory");
        break;
    default:
        console.log("Needs Improvement");
}