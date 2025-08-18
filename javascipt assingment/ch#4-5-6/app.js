// Assignment #4: JavaScript Variable Names - Legal & Illegal



// 1. Declare 3 variables in one statement


let var1 = "Hello", var2 = 42, var3 = true;
// 2. Declare 5 legal & 5 illegal variable names


// Legal variable names


let legalVar1 = "validName";
let legalVar2 = "_validName";
let legalVar3 = "$validName";
let legalVar4 = "validName1";
let legalVar5 = "validName_2";
// Illegal variable names


// let 1stVariable = "invalid"; // Starts with a number


// let my-variable = "invalid"; // Contains a hyphen


// let var@name = "invalid"; // Contains special character '@'


// let function = "invalid"; // Reserved keyword


// let var name = "invalid"; // Contains a space


// 3. Display in the browser


document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, underscores, and dollar signs. For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS reserved keywords.");



















// Assignment 5 - JavaScript



// Q1: Add two numbers

let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><hr>");



// Q2: Subtract, Multiply, Divede, Moduelus

let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

document.write("Subtraction: " + sub + "<br>");
document.write("Multiplication: " + mul + "<br>");
document.write("Division: " + div + "<br>");
document.write("Modulus: " + mod + "<br><hr>");



// Q3: Vareiable operations

let a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a += 7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
let remainder = a % 3;
document.write("The remainder is: " + remainder + "<br><hr>");



// Q4: Movie Ticket Total

let totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><hr>");


// Q5: Multiplication Table

let tableNum = +prompt("Enter a number for multiplication table:", 5);
document.write("<h3>Multiplication Table of " + tableNum + "</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<hr>");


// Q6: Temperature Converter


let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C<br><hr>");



// Q7: Shopping Cart

let item1Price = 650;
let item2Price = 100;
let qty1 = 3;
let qty2 = 7;
let shipping = 100;
let cartTotal = (item1Price * qty1) + (item2Price * qty2) + shipping;

document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + shipping + "<br>");
document.write("Total cost of your order is " + cartTotal + " PKR<br><hr>");



// Q8: Marks Sheet

let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br><hr>");



// Q9: Currency in PKR

let usd = 10;
let sar = 25;
let totalPKR = (usd * 280.8) + (sar * 28);
document.write("<h3>Currency in PKR</h3>");
document.write("Total Currency in PKR: " + totalPKR + "<br><hr>");



// Q10: Arithmetic Expression


let number = 10;
let calcResult = ((number + 5) * 10) / 2;
document.write("Result after calculation is: " + calcResult + "<br><hr>");



// Q11: Age Calculator

let currentYear = 2025;
let birthYear = 2007;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("<h3>Age Calculator</h3>");
document.write("They are either " + age2 + " or " + age1 + " years old.<br><hr>");



// Q12: Geometrizerr

let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;

document.write("<h3>The Geometrizer</h3>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
document.write("The area is: " + area.toFixed(2) + "<br><hr>");


// Q13: Lifetime Supply Calculator

let snack = "Chocolate Chip";
let currentAge = 18;
let maxAge = 80;
let perDay = 2;
let totalSnacks = (maxAge - currentAge) * 365 * perDay;

document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".<br>");





















// Assignment 6 - JavaScript



// Question 1: Arithmetic Result

let a1 = 10;
document.write("The value of a is: " + a1 + "<br>");

++a1;
document.write("The value of ++a is: " + a1 + "<br>");
document.write("Now the value of a is: " + a1 + "<br>");

a1++;
document.write("The value of a++ is: " + (a1 - 1) + "<br>");
document.write("Now the value of a is: " + a1 + "<br>");

--a1;
document.write("The value of --a is: " + a1 + "<br>");
document.write("Now the value of a is: " + a1 + "<br>");

a1--;
document.write("The value of a-- is: " + (a1 + 1) + "<br>");
document.write("Now the value of a is: " + a1 + "<br><hr>");


// Question 2: Value of a, b and result

let a = 2, b = 1;
let result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><hr>");


// Question 3: Greet the User

let userName = prompt("Enter your name:");
alert("Hello " + userName + ", Welcome!");



// Question 5: Multiplication Table

let num = +prompt("Enter a number for multiplication table:", 5);
document.write("<h3>Multiplication Table of " + num + "</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
document.write("<hr>");


// Question 6: Marks and Percentage Table

let sub1 = prompt("Enter name of first subject:");
let sub2 = prompt("Enter name of second subject:");
let sub3 = prompt("Enter name of third subject:");
let totalMarks = 100;

let marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
let marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
let marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

let totalObtained = marks1 + marks2 + marks3;
let percentage1 = (marks1 / totalMarks) * 100;
let percentage2 = (marks2 / totalMarks) * 100;
let percentage3 = (marks3 / totalMarks) * 100;
let overallPercentage = (totalObtained / (3 * totalMarks)) * 100;

document.write"<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>300</th><th>" + totalObtained + "</th><th>" + overallPercentage.toFixed(2) + "%</th></tr>");
document.write("</table>");














