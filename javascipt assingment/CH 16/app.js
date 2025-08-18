// ========== Assignment #13–15 ==========
// ========== Arrays in JavaScript ==========

var output = document.getElementById("output");

// Helper function to print on page
function print(text) {
  output.innerHTML += text + "<br>";
}

// Q1: Empty array (literal notation)
var studentNames1 = [];
print("Q1: Empty Array (Literal) → " + studentNames1);

// Q2: Empty array (object notation)
var studentNames2 = new Array();
print("Q2: Empty Array (Object) → " + studentNames2);

// Q3: Strings array
var stringsArray = ["Ali", "Asad", "Ahmed"];
print("Q3: Strings Array → " + stringsArray);

// Q4: Numbers array
var numbersArray = [10, 20, 30, 40];
print("Q4: Numbers Array → " + numbersArray);

// Q5: Boolean array
var booleanArray = [true, false, true];
print("Q5: Boolean Array → " + booleanArray);

// Q6: Mixed array
var mixedArray = ["Asad", 25, true, 99];
print("Q6: Mixed Array → " + mixedArray);

// Q7: Education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
print("<b>Q7: Qualifications in Pakistan:</b>");
for (var i = 0; i < qualifications.length; i++) {
  print((i+1) + ") " + qualifications[i]);
}

// Q8: Student scores and percentages
var students = ["Ali", "Sara", "Asad"];
var scores = [400, 350, 450];
var totalMarks = 500;
print("<b>Q8: Student Scores & Percentages:</b>");
for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  print(students[i] + " scored " + scores[i] + " out of " + totalMarks + " → " + percentage.toFixed(2) + "%");
}

// Q9: Color names array
var colors = ["Red", "Green", "Blue"];
print("<b>Q9: Color Array:</b> " + colors);

// a) Add color to beginning
var addStart = prompt("Enter a color to add at the beginning:");
colors.unshift(addStart);
print("After adding at beginning: " + colors);

// b) Add color to end
var addEnd = prompt("Enter a color to add at the end:");
colors.push(addEnd);
print("After adding at end: " + colors);

// c) Add 2 more colors to beginning
colors.unshift("Purple", "Orange");
print("After adding 2 colors at beginning: " + colors);

// d) Delete first color
colors.shift();
print("After deleting first color: " + colors);

// e) Delete last color
colors.pop();
print("After deleting last color: " + colors);

// f) Add color at user index
var indexAdd = +prompt("Enter index to add a color:");
var colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
print("After adding color at index " + indexAdd + ": " + colors);

// g) Delete colors from user index
var indexDelete = +prompt("Enter index to delete color(s):");
var countDelete = +prompt("How many colors to delete?");
colors.splice(indexDelete, countDelete);
print("After deleting " + countDelete + " color(s) from index " + indexDelete + ": " + colors);

// Q10: Sort student scores
var scores2 = [320, 230, 480, 120];
print("<b>Q10:</b> Original Scores: " + scores2);
scores2.sort(function(a, b){ return a - b; });
print("Sorted Scores: " + scores2);

// Q11: Cities array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
print("<b>Q11:</b> Selected Cities: " + selectedCities);

// Q12: Join array into string
var arr = ["This", "is", "my", "cat"];
var joinedString = arr.join(" ");
print("<b>Q12:</b> " + joinedString);

// Q13: FIFO (Queue)
var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");
print("<b>Q13: FIFO Output:</b>");
while (fifo.length) {
  print(fifo.shift());
}

// Q14: LIFO (Stack)
var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
print("<b>Q14: LIFO Output:</b>");
while (lifo.length) {
  print(lifo.pop());
}

// Q15: Phone manufacturers in dropdown
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
print("<b>Q15:</b><br>");
print('<select>');
for (var i = 0; i < manufacturers.length; i++) {
  print('<option>' + manufacturers[i] + '</option>');
}
print('</select>');
