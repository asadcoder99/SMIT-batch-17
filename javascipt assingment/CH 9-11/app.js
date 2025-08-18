// ch # 9-11 Assignment 
//chap 10 (If statement)
//chap 11 (Comparison Operator)


//Q1 

let city = prompt(`Enter the name of city`);

let cityName = city.toUpperCase();

console.log(`city is : ${cityName}`);
if (cityName == "KARACHI") {
alert("Welcome to city of light");
} else {
 alert(`Welcome to  ${cityName}`);
}




//Q2 WRITE A PROGRAM to take a input from user #gender as a input 

let gender = prompt(`Enter your Gender`);

//gpt
let gender_word = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

if ( gender_word == "Male") {
 alert("Good Morning Sir");
}else if (gender_word == "Female"){
  alert("Good Morning Ma'am")
}else{
  alert(`Good Morning ${gender_word}`);
}




//Q3 write a program to provide info about taffic light


let trafficLight_color = prompt("Enter the color of traffic light");

let trafficLight_signal = trafficLight_color.charAt(0).toUpperCase() + trafficLight_color.slice(1).toLowerCase();


let mess ;

if (trafficLight_signal == "Red") {

   mess = "Must Stop or speed up";
   alert(`If the light is red so you ${mess}`);


}else if (trafficLight_signal == "Yellow") {

   mess = "Ready to Move";
   alert(`If the light is yellow so ${mess}`);

}else if (trafficLight_signal == "Green") {
    mess = "Go Ahead";
    alert(`If the light is green so ${mess}`);
}else {
   mess = "Clear your Glasses";
   alert(`If the light is ${trafficLight_signal} so ${mess}`);
}

//END OF Q3


//Q4Write a program to take input remaining  fuel in car(in litres) from user. if the fuel is less than 0.25 litres 
//show the message "Pleasse refill the fuel in your car"

let fuel = prompt("Enter the remaining fuel in your car in litres");

let fuel_alert ;
if (fuel <= 0.25 ){
   fuel_alert = "Please refill the fuel in your car"
   console.log(`Your fuel is ${fuel} litres and you need to ${fuel_alert}`);
}else {
   fuel_alert = "fuel is enough"
   console.log(`Fuel Status: ${fuel} litres — ${fuel_alert}`);
   alert(`Fuel Status: ${fuel} litres — ${fuel_alert}`);
}

//END OF Q4

//Q5 use of pre increament/decreament ,post increament/decreament

let a = 18;
let b = 82;
let c = 12;

if ( ++a === 19){ 
   alert("Given condition for variable is true");
}

//for b
if (b++ === 83){
   alert("Given condition for variable is true");
}else if (b++ === 83){
   alert("Given condition for variable is false");
}else{
   alert("ERROR");
}

//for c=12
if (c++ === 13){

   alert(`For C condition 1 is true`);

}else if (c === 13){

   alert(`For C condition 2 is true`);

}else if (c++ === 13){

   alert(`For C condition 3 is true`);

}else if (++c < 14){

   alert(`For c condition 4 is true`);

}else if (c === 14){
  alert(`For c condition 5 is true `);
}

//For d

let materialCost = parseInt(prompt(`Enter total cost of material`));
let labourCost = parseInt(prompt(`Enter total cost of labour`));
let totalCost = materialCost + labourCost;

alert(`Total cost of product ${totalCost}`);
let profit = totalCost - 50000;

if( profit > labourCost ** 2){

  alert(`Profit levels are strong — well done!`);

}else{
   alert(`Profit levels are weak — need to improve!`);
}

//E 

if(true){

  alert(`TRUE`);

}else if (false){

  alert(`False`);

}


//Q6 grading system
document.write("<h2>MarkSheet<\h2>");

let marksOfEach = 100;
let marks_1 = parseInt(prompt(`Enter you marks of subject 1`));
let marks_2 = parseInt(prompt(`Enter you marks of subject 2`));
let marks_3 = parseInt(prompt(`Enter you marks of subject 3`));


let total_marks = marksOfEach * 3 ;

document.write("Total Marks :", total_marks, "<br>");

let obtain_marks = marks_1 + marks_2 + marks_3;

document.write("Obtained Marks :", obtain_marks, "<br>");

let grade ;

let percentage = (obtain_marks * 100) / total_marks;
if (percentage >= 80) {
    grade = "A-Grade";

    alert(`Grade: ${grade}`);
    alert(`Remarks : Excellent`);

} else if (percentage >= 60) {

    grade = "B-Grade";
    alert(`Grade: ${grade}`);
    alert(`Remarks : Good`);

} else if (percentage >= 40) { 

    grade = "C-Grade";
    alert(`Grade: ${grade}`);   
    alert(`Remarks : Fair`);

} else {
    grade = "D-Grade";
    alert(`Grade: ${grade}`);
    alert(`Remarks : Poor`);
}

document.write(`Percentage : ${percentage}%`, "<br>");
document.write(`grade: ${grade}`, "<br>");



//END Q6

//Q7 guess game 

let game_no = 9

let guess_no = parseInt(prompt(`Guess the number between 1 to 10`));

if (guess_no === game_no ){

   alert(`Bingo! correct guess `);

}else if (++guess_no === game_no ){

   alert(`You are too close`);

}


//end Q7

//Q8 check no is divisble ny 3

let div_3 = parseInt(prompt("Enter a number to check if it is divisible by 3"));

if (div_3 % 3 === 0){
   alert(`${div_3} is divisible by 3`);
}else {
   alert(`${div_3} is not divisible by 3`);    
}

//END 8
 
//Q9 check odd and even 

let numOddEven = parseInt(prompt("Enter a number to check even or odd "));

if (numOddEven % 2 === 0){

   alert(`${numOddEven} is even`);

}else if (numOddEven % 2 !== 0){

   alert(`${numOddEven} is Odd`);

}

//END Q8

//Q10
let temp = parseInt(prompt(`Enter Temperature`));
if (temp > 40){

  alert(`${temp} is too hot outside`);

}else if (temp > 30 && temp <= 40){

  alert(`${temp} # whether today is normal`);

}else if (temp > 20 && temp <= 30){

  alert(`${temp} #Whether is cool`);

}else if (temp > 0 && temp <= 20){

   alert(`${temp} #Whether is very cool`);

}

//Q 11
let num_1 = parseInt(prompt(`Enter a number 1 `));
let num_2 = parseInt(prompt(`Enter a number 2 `));

console.log(`Add : num_1 + num_2 = ${num_1 + num_2}`);
console.log(`Subtract : num_1 - num_2 = ${num_1 - num_2}`);
console.log(`Multiply : num_1 * num_2 = ${num_1 * num_2}`);
console.log(`Divide : num_1 / num_2 = ${num_1 / num_2}`);
console.log(`Reminder: num_1 % num_2 = ${num_1 % num_2}`);