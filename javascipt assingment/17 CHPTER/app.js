// Assignment #17-20 
//  Arrays and Loops in JavaScript 

// Q1: Declare and initialize an empty multidimensional array
var emptyArray = [[], [], []];
console.log("Q1: Empty Multidimensional Array:", emptyArray);

// Q2: Declare and initialize a multidimensional array representing matrix
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
console.log("Q2: Matrix:");
console.table(matrix);

// Q3: Print numeric counting from 1 to 10
console.log("Q3: Counting 1 to 10");
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Q4: Multiplication table (take input from user)
var tableNumber = +prompt("Enter a number for multiplication table:");
var tableLength = +prompt("Enter length of multiplication table:");
console.log("Q4: Multiplication Table of " + tableNumber);
for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// Q5: Print items of fruits array
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Q5: Fruits List");
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Q6: Generate series
console.log("Q6a: Counting");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

console.log("Q6b: Reverse Counting");
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Q6c: Even Numbers");
for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}

console.log("Q6d: Odd Numbers");
for (var i = 1; i < 20; i += 2) {
  console.log(i);
}

console.log("Q6e: Series (k)");
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

// Q7: Search in array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome! What do you want to order?");
if (A.includes(userInput.toLowerCase())) {
  alert(userInput + " is available at index " + A.indexOf(userInput.toLowerCase()) + " in our bakery.");
} else {
  alert("We are sorry, " + userInput + " is not available in our bakery.");
}

// Q8: Largest number in array
var numbers = [24, 53, 78, 91, 12];
var largest = Math.max(...numbers);
console.log("Q8: Largest Number = " + largest);

// Q9: Smallest number in array
var smallest = Math.min(...numbers);
console.log("Q9: Smallest Number = " + smallest);

// Q10: Multiples of 5 from 1 to 100
console.log("Q10: Multiples of 5 (1 to 100)");
for (var i = 5; i <= 100; i += 5) {
  console.log(i);
}
