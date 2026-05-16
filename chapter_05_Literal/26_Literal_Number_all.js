/*
Lab 26 — Number types & numeric support in JavaScript

This file demonstrates:
- primitive `Number` behavior (integers, floats)
- numeric literals (decimal, hex, octal, binary, exponential)
- special values: `NaN`, `Infinity`
- numeric separators `_`
- `BigInt` for large integers
- parsing/conversion: `Number()`, `parseInt`, `parseFloat`, unary `+`
- checks: `Number.isNaN`, `Number.isFinite`, `Number.isInteger`
- formatting: `toFixed`, `toExponential`, `toString(radix)`
- precision caveats and safe integers
*/

console.log('\n--- Lab 26: Number types & numeric support in JavaScript ---\n');

// 1) Numeric literals
const dec = 255; // decimal
const hex = 0xff; // hexadecimal (255)
const bin = 0b11111111; // binary (255)
const oct = 0o377; // octal (255)
const expo = 1.23e3; // exponential notation (1230)
const sep = 1_000_000; // numeric separator (ES2021)

console.log('decimal:', dec);
console.log('hex:', hex);
console.log('binary:', bin);
console.log('octal:', oct);
console.log('exponential:', expo);
console.log('numeric separator:', sep);

// 2) Floating point & precision caveat
console.log('\n-- Floating point precision --');
console.log('0.1 + 0.2 === 0.3 ->', 0.1 + 0.2 === 0.3); // false
console.log('0.1 + 0.2 =', 0.1 + 0.2); // 0.30000000000000004

// Use Number.EPSILON to compare floats safely
function nearlyEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log('nearlyEqual(0.1+0.2, 0.3):', nearlyEqual(0.1 + 0.2, 0.3));

// 3) Special number values
console.log('\n-- Special values --');
console.log('Infinity:', Infinity);
console.log('-Infinity:', -Infinity);
console.log('NaN:', NaN);
console.log('typeof NaN:', typeof NaN);

// Note: NaN is the only value in JS that is !== itself
console.log('NaN === NaN ->', NaN === NaN);
console.log('Number.isNaN(NaN) ->', Number.isNaN(NaN));
console.log('global isNaN("foo") ->', isNaN('foo'));
console.log('Number.isNaN("foo") ->', Number.isNaN('foo'));

// 4) Number checks & limits
console.log('\n-- Number checks & limits --');
console.log('Number.isFinite(Infinity) ->', Number.isFinite(Infinity));
console.log('Number.isFinite(123) ->', Number.isFinite(123));
console.log('Number.isInteger(5) ->', Number.isInteger(5));
console.log('Number.isInteger(5.1) ->', Number.isInteger(5.1));
console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);

// 5) BigInt — integers beyond safe range
console.log('\n-- BigInt --');
const big = 9007199254740991n; // Number.MAX_SAFE_INTEGER is 9007199254740991
console.log('big (literal):', big);
console.log('BigInt(42):', BigInt(42));

// Mixing BigInt and Number in arithmetic throws TypeError
try {
  // Uncommenting next line would throw: TypeError
  // console.log(1n + 2);
  console.log('Mixing BigInt and Number throws TypeError (example commented)');
} catch (e) {
  console.log('error mixing BigInt and Number:', e.message);
}

// Use BigInt for integer math beyond safe range
const bigA = 9007199254740993n;
const bigB = 2n;
console.log('bigA + bigB:', bigA + bigB);

// 6) Conversions & parsing
console.log('\n-- Conversions & parsing --');
console.log("Number('123') ->", Number('123'));
console.log("+'123' ->", +'123');
console.log("parseInt('42px') ->", parseInt('42px'));
console.log("parseFloat('3.14m') ->", parseFloat('3.14m'));
console.log("parseInt('0xff', 16) ->", parseInt('0xff', 16));
console.log("parseInt('011', 2) ->", parseInt('011', 2));

// Be explicit with radix
console.log("parseInt('08') without radix ->", parseInt('08'));
console.log("parseInt('08', 10) ->", parseInt('08', 10));

// 7) Formatting & representation
console.log('\n-- Formatting & representation --');
const n = 1234.56789;
console.log('toFixed(2):', n.toFixed(2));
console.log('toExponential(2):', n.toExponential(2));
console.log('toPrecision(6):', n.toPrecision(6));
console.log('toString():', n.toString());
console.log('toString(16):', n.toString(16)); // show in hex (integer part + fraction)

// toString with radix for integers
console.log('(255).toString(16) ->', (255).toString(16));
console.log('(255).toString(2) ->', (255).toString(2));

// 8) Useful Number helpers
console.log('\n-- Useful helpers --');
console.log('Number.isNaN("foo") ->', Number.isNaN('foo'));
console.log('isNaN("foo") ->', isNaN('foo'));
console.log('Number.isFinite("123") ->', Number.isFinite('123'));
console.log('Number(\'\') ->', Number(''));

// 9) Math helpers
console.log('\n-- Math helpers --');
console.log('Math.round(4.5) ->', Math.round(4.5));
console.log('Math.floor(4.9) ->', Math.floor(4.9));
console.log('Math.ceil(4.1) ->', Math.ceil(4.1));
console.log('Math.trunc(4.9) ->', Math.trunc(4.9));

// 10) Summary examples — common pitfalls and recommendations
console.log('\n-- Summary & recommendations --');
console.log('Avoid equality checks for floats; use EPSILON-based comparisons.');
console.log('Use BigInt for integers outside the safe integer range.');
console.log('Always pass a radix to parseInt when parsing non-decimal strings.');

console.log('\n--- End of Lab 26 ---\n');
