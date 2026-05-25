// ---- NULL Related Operators in JavaScript ----

// 1. Null Comparisons with Relational Operators
// null is coerced to 0 in numeric comparisons (>, <, >=, <=)
console.log(null >= "0"); // true  => 0 >= 0
console.log(null > "0");  // false => 0 > 0
console.log(null <= "0"); // true  => 0 <= 0
console.log(null < "0");  // false => 0 < 0

// 2. Abstract Equality (==) — null only == undefined, not anything else
console.log(null == "0");  // false — null is not coerced to 0 with ==
console.log(null == 0);    // false — special case
console.log(null == undefined); // true
console.log(null == null); // true

// 3. Strict Equality (===) — no coercion
console.log(null === "0"); // false — different types
console.log(null === undefined); // false — different types

// 4. Nullish Coalescing Operator (??)
// Returns right-hand side only when left-hand side is null or undefined
let a = null;
let b = undefined;
let c = 0;
let d = "";

console.log(a ?? "default"); // "default" — null
console.log(b ?? "default"); // "default" — undefined
console.log(c ?? "default"); // 0 — not null/undefined, so returns 0
console.log(d ?? "default"); // "" — not null/undefined, so returns ""

// Difference between ?? and || (logical OR):
// || treats all falsy values (0, "", false, NaN) as falsy
// ?? only treats null/undefined as nullish
console.log(c || "default"); // "default" — 0 is falsy for ||
console.log(d || "default"); // "default" — "" is falsy for ||

// 5. Optional Chaining (?.)
// Safely access nested properties without throwing on null/undefined
let obj = { user: { name: "Alice" } };
let empty = null;

console.log(obj?.user?.name); // "Alice"
console.log(empty?.user?.name); // undefined (no error)

// 6. typeof null — historical JS bug
console.log(typeof null); // "object" (not "null")

// Summary:
// - >=, >, <, <= coerce null to 0
// - == does NOT coerce null to 0 (null only == undefined)
// - === checks type + value (no coercion)
// - ?? returns RHS only for null/undefined (not other falsy values)
// - ?. safely accesses properties on possibly null/undefined values
// - typeof null is "object" (a known language quirk)
