// ====== Assignment #26–30 ======


//  Question 1: Positive Integer 
var positiveNum = +prompt("Enter a positive integer number:");
document.write("<h2>Q1: Positive Integer</h2>");
document.write("Number: " + positiveNum + "<br>");
document.write("Round off: " + Math.round(positiveNum) + "<br>");
document.write("Floor: " + Math.floor(positiveNum) + "<br>");
document.write("Ceil: " + Math.ceil(positiveNum) + "<br><hr>");

//  Question 2: Negative Floating Number 
var negativeNum = +prompt("Enter a negative floating number:");
document.write("<h2>Q2: Negative Floating Number</h2>");
document.write("Number: " + negativeNum + "<br>");
document.write("Round off: " + Math.round(negativeNum) + "<br>");
document.write("Floor: " + Math.floor(negativeNum) + "<br>");
document.write("Ceil: " + Math.ceil(negativeNum) + "<br><hr>");

//  Question 3: Absolute Value 
var absNum = +prompt("Enter any number :");
document.write("<h2>Q3: Absolute Value</h2>");
document.write("Absolute Value of " + absNum + " is " + Math.abs(absNum) + "<hr>");

//  Question 4: Dice Simulation 
var dice = Math.floor(Math.random() * 6) + 1;
document.write("<h2>Q4: Dice Value</h2>");
document.write("Random Dice Value: " + dice + "<hr>");

//  Question 5: Coin Toss 
var coin = Math.floor(Math.random() * 2) + 1;
var result = (coin === 1) ? "Heads" : "Tails";
document.write("<h2>Q5: Coin Toss</h2>");
document.write("Result: " + result + "<hr>");

//  Question 6: Random Number (1–100) 
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("<h2>Q6: Random Number</h2>");
document.write("Random number (1–100): " + randomNum + "<hr>");

//  Question 7: User Weight 
var weightInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(weightInput);
document.write("<h2>Q7: User Weight</h2>");
document.write("Your weight is: " + weight + " kilograms<hr>");

//  Question 8: Secret Number Guess 
var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess a number between 1 and 10:");
document.write("<h2>Q8: Secret Number Game</h2>");
if (userGuess === secretNum) {
    document.write(" Mubarak ho! You guessed right. Secret number was " + secretNum + "<hr>");
} else {
    document.write(" Wrong guess. The secret number was " + secretNum + "<hr>");
}