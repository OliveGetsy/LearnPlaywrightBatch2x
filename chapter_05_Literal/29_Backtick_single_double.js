/*
Lab 29 — Difference between backtick, single, and double quotes

- Single quotes (') and double quotes (") both define ordinary strings.
- Backticks (`) define template literals, which can do interpolation and multi-line text.
*/

const name = 'Bob';

console.log('Hello ' + name);          // single-quote string + concatenation
console.log("Hello " + name);         // double-quote string + concatenation
console.log(`Hello ${name}`);           // backtick string with interpolation
