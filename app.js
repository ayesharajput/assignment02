
// USER INPUT & CONDITIONAL // STATEMENT chapter no 09 - 11

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter city name: ");
if (city === "karachi")
 {
  alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender: ");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender=== "female") {
  alert("Good Morning Ma'am");
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green

var signalColor = prompt("Enter the color of the traffic signal: ");
signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
  alert("Must Stop");
} else if (signalColor === "yellow") {
  alert("Ready to move");
} else if (signalColor === "green") {
  alert("Move now");
} else {
  alert("Invalid signal color");
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”


var remainingFuel = ("Enter remaining fuel in liters: ");
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
}


// Question no 05 

// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e.
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// f.
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Question no 06 


var subject1 = ("Enter marks obtained in Subject 1: ");
var subject2 = ("Enter marks obtained in Subject 2: ");
var subject3 = ("Enter marks obtained in Subject 3: ");
var totalMarks = ("Enter total marks: ");


var totalObtainedMarks = subject1 + subject2 + subject3;
var percentage = (totalObtainedMarks / totalMarks) * 100;


var grade, remarks;


if (percentage >= 90) {
  grade = "A+";
  remarks = "Excellent";
} else if (percentage >= 80) {
  grade = "A";
  remarks = "Very Good";
} else if (percentage >= 70) {
  grade = "B";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "C";
  remarks = "Satisfactory";
} else if (percentage >= 50) {
  grade = "D";
  remarks = "Pass";
} else {
  grade = "F";
  remarks = "Fail";
}


document.write("Result");
document.write("Total Marks: " + totalMarks );
document.write("Marks Obtained: " + totalObtainedMarks );
document.write("Percentage: " + percentage );
document.write("Grade: " + grade  );
document.write("Remarks: " + remarks );

// Question no 07
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = +(prompt("Guess the secret number (1-10): "));

if (userGuess === secretNumber) {
  alert(" Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert(" incorrect guess. The correct answer was " + secretNumber);
}

// Question no 08
var number = +(prompt("Enter a number: "));
if (number % 3 === 0) {
  alert(number + " is divisible by 3");
} else {
  alert(number + " is not divisible by 3");
}

// Question no 09
var number = +(prompt("Enter a number: "));
if (number % 2 === 0) {
  alert(number + " is an even number");
} else {
  alert(number + " is an odd number");
}

// Question no 10 
var temperature = +prompt("Enter the temperature: ");

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("T Weather is cool.");
} else if (temperature > 10) {
  alert("  weather is so Cool.");
} else {
  alert("It's freezing cold!");
}

// Question no 11
var num1 = parseFloat(prompt("Enter the first number: "));
var num2 = parseFloat(prompt("Enter the second number: "));
var operation = prompt("Enter the operation (+, -, *, /, %): ");
var result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input. Please enter valid numbers.");
} else {
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      alert("Division by zero is not allowed.");
    } else {
      result = num1 / num2;
    }
  } else if (operation === "%") {
    result = num1 % num2;
  } else {
    alert("Invalid operation. Please enter a valid operation (+, -, *, /, %).");
  }

  if (result !== undefined) {
    alert("Result: " + result);
  }
}
