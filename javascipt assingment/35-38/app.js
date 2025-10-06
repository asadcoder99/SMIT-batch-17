// 1. Show current date & time
function showDate() {
  var now = new Date();
  document.getElementById("dateTime").innerHTML = now;
}

// 2. Greet user
function greetUser() {
  var first = prompt("Enter first name:");
  var last = prompt("Enter last name:");
  document.getElementById("greetMsg").innerHTML = "Hello, " + first + " " + last;
}

// 3. Add two numbers
function addNumbers() {
  var n1 = parseInt(prompt("Enter first number:"));
  var n2 = parseInt(prompt("Enter second number:"));
  var sum = n1 + n2;
  document.getElementById("sumResult").innerHTML = "Sum = " + sum;
}

// 4. Calculator
function calculator() {
  var n1 = parseFloat(prompt("Enter first number:"));
  var n2 = parseFloat(prompt("Enter second number:"));
  var op = prompt("Enter operator (+, -, *, /):");
  var result;
  if (op === "+") result = n1 + n2;
  else if (op === "-") result = n1 - n2;
  else if (op === "*") result = n1 * n2;
  else if (op === "/") result = n1 / n2;
  else result = "Invalid operator!";
  document.getElementById("calcResult").innerHTML = "Result = " + result;
}

// 5. Square a number
function squareNumber() {
  var num = parseInt(prompt("Enter a number:"));
  document.getElementById("squareResult").innerHTML = "Square = " + (num * num);
}

// 6. Factorial
function findFactorial() {
  var num = parseInt(prompt("Enter a number:"));
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  document.getElementById("factResult").innerHTML = "Factorial = " + fact;
}

// 7. Counting
function showCounting() {
  var start = parseInt(prompt("Enter start number:"));
  var end = parseInt(prompt("Enter end number:"));
  var output = "";
  for (var i = start; i <= end; i++) {
    output += i + " ";
  }
  document.getElementById("countingResult").innerHTML = output;
}

// 8. Hypotenuse (nested function)
function calcHypotenuse() {
  var base = parseInt(prompt("Enter base:"));
  var perp = parseInt(prompt("Enter perpendicular:"));

  function square(x) {
    return x * x;
  }

  var hyp = Math.sqrt(square(base) + square(perp));
  document.getElementById("hypotenuseResult").innerHTML = "Hypotenuse = " + hyp;
}

// 9. Area of rectangle
function rectArea() {
  var width = parseInt(prompt("Enter width:"));
  var height = parseInt(prompt("Enter height:"));
  var area = width * height;
  document.getElementById("rectResult").innerHTML = "Area = " + area;
}

// 10. Palindrome check
function checkPalindrome() {
  var str = prompt("Enter a word:");
  var rev = str.split("").reverse().join("");
  if (str === rev)
    document.getElementById("palindromeResult").innerHTML = str + " is a Palindrome!";
  else
    document.getElementById("palindromeResult").innerHTML = str + " is NOT a Palindrome.";
}

// 11. Capitalize words
function capitalizeWords() {
  var str = prompt("Enter a sentence:");
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  document.getElementById("capitalizeResult").innerHTML = words.join(" ");
}

// 12. Longest word
function findLongestWord() {
  var str = prompt("Enter a sentence:");
  var words = str.split(" ");
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  document.getElementById("longestResult").innerHTML = "Longest word = " + longest;
}

// 13. Count letter occurrences
function countLetter() {
  var str = prompt("Enter a string:");
  var letter = prompt("Enter a letter to count:");
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  document.getElementById("letterCountResult").innerHTML =
    "Letter '" + letter + "' occurs " + count + " times.";
}

// 14. Circle properties
function circleProps() {
  var r = parseFloat(prompt("Enter radius:"));
  var circumference = 2 * Math.PI * r;
  var area = Math.PI * r * r;
  document.getElementById("circleResult").innerHTML =
    "Circumference = " + circumference.toFixed(2) +
    "<br>Area = " + area.toFixed(2);
}
