let testcase = 96;
if (testcase === 100) {
    console.log("🟢 Green Build");
}
else if (testcase >= 90 && testcase <= 99) {
    console.log("🟡 Stable — Investigate failures");
}
else if (testcase >= 70 && testcase <= 89) {
    console.log("🟠 Unstable");
}
else if (testcase < 70) {
    console.log("🔴 Broken Build — Block deployment");
}