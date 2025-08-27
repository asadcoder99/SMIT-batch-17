//********************Chapter 18-20: Arrays and Loops**********************//

//---------------------Q1
// Declare then initialize empty multidimensional array
document.write("<h2>Q1: Empty Multidimensional Array</h2>");
var myArray = [[], [], []]; // 3 empty arrays ke saath initialize kiya
document.writeln(myArray);



//---------------------Q2
// Matrix representation 2D array 
var matrix = [
    [0, 1, 2, 3],//each row represent inner seprate array 
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write("<h2>Q2: Matrix</h2>");
for (var i = 0; i < matrix.length; i++) {
    document.writeln(matrix[i] + "<br>");
}


//---------------------Q3
//Numeric Counting
document.write("<h2>Q3: Numeric Counting</h2>");
for (var i = 1; i <= 10; i++) {
    // document.writeln(i)
    console.log(i)
    document.writeln(i + "<br>")
}


//---------------------Q4
var tableNum = +prompt("Q4\nEnter a Number to show its multiplication table.")
var tableLength = +prompt("Q4\nEnter a Required Length For Your Multiplication Table")
document.write(`<h2>Q4: Multiplicarion Table</h2><br>Multiplication Table of ${tableNum}<br>Length ${tableLength}<br><br>`);
for (var i = 1; i <= tableLength; i++) {
    document.writeln(`${tableNum} x ${i} = ${tableNum * i}<br>`)
}



//---------------------Q5
document.write("<h2>Q5: Print Array Using Loop </h2>");
fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.writeln(fruits[i] + "<br>")
}

for (var i = 0; i < fruits.length; i++) {
    document.writeln(`<br>Element at Index ${i} is ${fruits[i]}`)
}


//---------------------Q6
var input_Lentgh = +prompt("Q6\nEnter a Length For Generating Diffrent Series.")
document.write("<h2>Q6: Generating Series OF Outputs</h2>");

document.writeln(`<h4>Counting:</h4>`)
for (var i = 1; i <= input_Lentgh; i++) {
    document.writeln(`${i},`)
}
document.writeln(`<h4>Reverse Counting:</h4>`)// IS MEIN  ITERATION GOES 0 SE 10BUT PRINT 10 se 1
for (var i = 0; i <= input_Lentgh - 1; i++) {
    document.writeln(`${input_Lentgh - i},`)
}
document.writeln(`<h4>Even:</h4>`)
for (var i = 0; i <= input_Lentgh; i++) {
    if (i % 2 == 0) {
        document.writeln(`${i},`)
    }
}
document.writeln(`<h4>Odd:</h4>`)
for (var i = 0; i <= input_Lentgh; i++) {
    if (i % 2 != 0) {
        document.writeln(`${i},`)
    }
}
document.writeln(`<h4>Series:</h4>`)
for (var i = 1; i <= input_Lentgh; i++) {
    if (i % 2 == 0) {
        document.writeln(`${i}K,`)
    }
}



//---------------------Q7
// initally assume kra hi not found if se check kra ki found yes ? if true then change value
document.write("<h2>Q7: Search By User Input</h2>");
A = ["cake", "apple pie", "cookie", "chips", "patties"]

var input = prompt("Q7\nWelcome To ABC Bakery What do you order Sir/ma'am?")
var lowerInput= input.toLowerCase();//lowercase return a new string need to store in 
// a variable ok, it dont modify orignal string

var result=false;
for (var i = 0; i <= A.length - 1; i++) {
    if (lowerInput === A[i].toLowerCase()) {
        result= true;
        break;
    }

}

if(result==true)
document.write(`${input} is available at index ${i} in our Bakery.`);
else {
    document.write(`We are sorry '${input}' is not available in our Bakery. `);
}





//-------------------------------------------------------------Q8
document.write("<h2>Q8: Largest Number In a Array</h2>");
A = [24, 53, 78, 91, 12]
document.write("Orignal Array Items: " + A)
var temp = A[0]// intially first index ki value store krdien whatever it
for (var i = 0; i < A.length; i++) { //array index 1 se last tk chleega
    if (A[i] > temp) { // Index 1 pr value bari hui ,zero index(temp) se tw temp update
        temp = A[i]; // here temp  update and store the assume it is largest one
    }
}
document.write(`<br>The Largest Number is:${temp}<br>`)



//-------------------------------------Q9
document.write("<h2>Q9: Smallest Number In a Array</h2>");
A = [24, 53, 78, 91, 12]
document.write("Orignal Array Items: " + A)
var temp = A[0]// intially first index ki value store krdien whatever it
for (var i = 1; i < A.length; i++) { //array index 1 se last tk chleega
    if (A[i] < temp) { // Index 1 pr value bari hui ,zero index(temp) se tw temp update
        temp = A[i]; // here temp  update and store the assume it is smallest one
    }
}
document.write(`<br>The Smallest Number is:${temp}<br>`)





//---------------------Q10
document.write("<h2>Q10: Multiples Of 5 (1 to 100)</h2>");
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.writeln(`${i}, `)
    }
}
