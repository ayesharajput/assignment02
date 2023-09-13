// IF...ELSE & ELSE IF STATEMENT, chapter no  12-13
// TESTING SET OF CONDITIONS
// Question no 1
var input = prompt("Enter a character (number or string):");

if (input >= '0' && input <= '9') {
  alert("It's a number");
} else if (input >= 'A' && input <= 'Z') {
  alert("It's an uppercase letter");
} else if (input >= 'a' && input <= 'z') {
  alert("It's a lowercase letter");
} else {
  alert("It's not a number or letter");
}

// Question no 2
var num1 = +prompt("Enter the first integer: ");
var num2 = +prompt("Enter the second integer: ");

if (num1 > num2) {
  alert(num1 + " is larger");
} else if (num2 > num1) {
  alert(num2 + " is larger");
} else {
  alert("Both integers are equal");
}

// Question no 3
var number = +prompt("Enter a number: ");

if (number > 0) {
  alert("It's a positive number");
} else if (number < 0) {
  alert("It's a negative number");
} else {
  alert("It's zero");
}

// Question no 4
var character = prompt("Enter a single character:");

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
  alert("It's a vowel");
} else {
  alert("It's not a vowel");
}

// Question no 5
var correctPassword = "myPassword";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct!");
} else {
  alert("Incorrect password");
}

// Question no 6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Question no 7


