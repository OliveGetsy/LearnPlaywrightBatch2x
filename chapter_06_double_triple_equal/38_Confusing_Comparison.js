// 38_Confusing_Comparison.js
// Examples of confusing == coercions and === (strict) behavior
// Run with: node "d:\Automation Videos and Docs for UI Testing\LearnPlaywrightBatch2x\chapter_06_double_triple_equal\38_Confusing_Comparison.js"

console.log('"" == 0 ->', "" == 0); // true
console.log('0 == "0" ->', 0 == "0"); // true
console.log('"" == "0" ->', "" == "0"); // false

console.log('\nnull == undefined ->', null == undefined); // true
console.log('null === undefined ->', null === undefined); // false

console.log('\nNaN == NaN ->', NaN == NaN); // false
console.log('NaN === NaN ->', NaN === NaN); // false

console.log('\n[] == "" ->', [] == ""); // true ([].toString() -> "")
console.log('[] == 0 ->', [] == 0); // true ("" == 0)
console.log('[1] == 1 ->', [1] == 1); // true ("1" -> 1)
console.log('[1,2] == "1,2" ->', [1,2] == "1,2"); // true

const o = {};
console.log('\n{} == {} ->', {} == {}); // false (different objects)
console.log('o == "[object Object]" ->', o == "[object Object]"); // true (toString)

console.log('\ntrue == 1 ->', true == 1); // true
console.log('false == 0 ->', false == 0); // true
console.log('"0" == false ->', "0" == false); // true ("0" -> 0, false -> 0)
console.log('"" == false ->', "" == false); // true

console.log('\nnew String("a") == "a" ->', new String("a") == "a"); // true (object coerces to primitive)
console.log('new String("a") === "a" ->', new String("a") === "a"); // false (different types)

console.log('\n0 == -0 ->', 0 == -0); // true
console.log('0 === -0 ->', 0 === -0); // true

// Transitivity example:
console.log('\nTransitivity: "" == 0 ->', "" == 0); // true
console.log('0 == "0" ->', 0 == "0"); // true
console.log('BUT "" == "0" ->', "" == "0"); // false

// A few more edge cases
console.log('\n\" \" == [] ->', "" == []); // true
console.log('\" \" === [] ->', "" === []); // false
console.log('false == [] ->', false == []); // true? -> false == [] -> false? Let's evaluate: [] -> "" -> 0, false->0 so true
console.log('false == [] ->', false == []);

console.log('\nSummary: Use === for predictable comparisons (no coercion). Use explicit conversions if needed.');
