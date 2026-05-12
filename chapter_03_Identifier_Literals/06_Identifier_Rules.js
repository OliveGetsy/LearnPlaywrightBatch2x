var $ = 10;
var _s = 12;
var p = 10;

var ab123 = 34;

//var 123=123; //invalid

var Name = "Olive"; //valid but not recommended
var name = "Olive"; //valid and recommended

//var olive getsy="Hello"; //invalid
var olive_getsy = "Hello"; //valid and recommended
var olive$getsy = "Hello"; //valid but not recommended
var olivegetsy = "Hello"; //valid but not recommended

// Additional examples for all identifier rules

// 1. Must start with letter, _, or $
var myVar = 1; // starts with letter
var _private = 2; // starts with _
var $dollar = 3; // starts with $

// 2. Subsequent characters: letters, digits, _, $
var myVar123 = 4; // includes digits
var user_Name = 5; // includes _
var price$ = 6; // includes $

// 3. Case-sensitive
var MyVar = 7; // different from myVar
var myvar = 8; // different from MyVar

// 4. Cannot be reserved words
// var if = 9; // invalid - 'if' is a keyword
// var for = 10; // invalid - 'for' is a keyword
var myIf = 11; // valid - not a keyword

// 5. No spaces or special characters except _ and $
var userName = 12; // valid
// var user name = 13; // invalid - space
// var user@name = 14; // invalid - @ not allowed
var user_name = 15; // valid - _
var user$name = 16; // valid - $

// 6. Should be meaningful
var userAge = 17; // meaningful
var x = 18; // not meaningful, but valid 