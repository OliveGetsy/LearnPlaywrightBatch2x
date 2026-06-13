let responseCode = 404;
switch (responseCode) {
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("404 not found");
        break;
    case 503:
        console.log("Server down");
        break;
    default:
        console.log("No Status Code Match");

}