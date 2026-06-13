let browser = "Google Chrome";

switch (browser) {
    case "Google Chrome":
    case "Microsoft Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Browser");
        break;

    case "Firefox":
        console.log("Mozilla Project");
        break;

    case "Safari":
        console.log("Safari Apple Product");
        break;

    default:
        console.log("Unknown browser - manual testing needed");

}