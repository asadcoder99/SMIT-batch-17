//********************Chapter 21-25: ********************//

//---------------------Q1
document.write("<h2>Q1: </h2>");
var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName + " " + lastName;
document.write("Hello " + fullName + "<br>");

//---------------------Q2
document.write("<h2>Q2: </h2>");
var mobile = prompt("Enter your favorite mobile phone model");
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + mobile.length + "<br>");

//---------------------Q3
document.write("<h2>Q3: </h2>");
var word1 = "Pakistani";
var indexN = word1.indexOf("n");
document.write("String: " + word1 + "<br>");
document.write("Index of 'n': " + indexN + "<br>");

//---------------------Q4
document.write("<h2>Q4: </h2>");
var word2 = "Hello World";
var lastIndex = word2.lastIndexOf("l");
document.write("String: " + word2 + "<br>");
document.write("Last index of 'l': " + lastIndex + "<br>");

//---------------------Q5
document.write("<h2>Q5: </h2>");
var word3 = "Pakistani";
var charAt3 = word3.charAt(3);
document.write("String: " + word3 + "<br>");
document.write("Character at index 3: " + charAt3 + "<br>");

//---------------------Q6
document.write("<h2>Q6: </h2>");
var firstName2 = prompt("Enter your First Name");
var lastName2 = prompt("Enter your Last Name");
var fullName2 = firstName2.concat(" ", lastName2);
document.write("Hello " + fullName2 + "<br>");

//---------------------Q7
document.write("<h2>Q7: </h2>");
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>");

//---------------------Q8
document.write("<h2>Q8: </h2>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Message: " + message + "<br>");
document.write("After replacement: " + newMessage + "<br>");

//---------------------Q9
document.write("<h2>Q9: </h2>");
var str = "472";
var num = Number(str);
document.write("Value: " + str + " (type: " + typeof(str) + ")<br>");
document.write("Value: " + num + " (type: " + typeof(num) + ")<br>");

//---------------------Q10
document.write("<h2>Q10: </h2>");
var userInput = prompt("Enter any text");
var upperCase = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + upperCase + "<br>");