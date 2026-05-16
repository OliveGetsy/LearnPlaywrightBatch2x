// Template literals can span multiple lines
let multiLine = `This is a multi-line
string literal using template literals.`;
console.log('multiLine:', multiLine);


let firstname = "ppramoddh"; // This is a string literal assigned to a variable named firstname
let fullname = `Hi ${firstname} Duttaa`;
console.log('fullname:', fullname);


let env = "staging";
env = "production";
const userId = "user123";
const api_URl = `https://${env}.api.example.com/users/${userId}`;
console.log('API URL:', api_URl);

//Playwright example
const rowindex = 3;
const columnname = "email";
await page.locator(`[data-row="${rowindex}"] [data-column="${columnname}"]`).click();

//Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);

//screenshot example
const testCase = "checkout flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });



