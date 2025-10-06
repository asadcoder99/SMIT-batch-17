// 1. Power function
function powerFunc() {
  var a = parseInt(prompt("Enter base:"));
  var b = parseInt(prompt("Enter exponent:"));
  var result = 1;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  alert(a + "^" + b + " = " + result);
}

// 2. Leap year
function checkLeapYear() {
  var year = parseInt(prompt("Enter a year:"));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year + " is a Leap Year");
  } else {
    alert(year + " is NOT a Leap Year");
  }
}

// 3. Area of triangle
function triangleArea() {
  var a = parseFloat(prompt("Enter side a:"));
  var b = parseFloat(prompt("Enter side b:"));
  var c = parseFloat(prompt("Enter side c:"));
  var S = (a + b + c) / 2;

  function area(s, a, b, c) {
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  alert("Area of Triangle = " + area(S, a, b, c).toFixed(2));
}

// 4. Average & percentage
function studentMarks() {
  var m1 = parseInt(prompt("Enter marks of subject 1:"));
  var m2 = parseInt(prompt("Enter marks of subject 2:"));
  var m3 = parseInt(prompt("Enter marks of subject 3:"));

  function average(a, b, c) {
    return (a + b + c) / 3;
  }
  function percentage(a, b, c) {
    return ((a + b + c) / 300) * 100;
  }

  var avg = average(m1, m2, m3);
  var perc = percentage(m1, m2, m3);
  alert("Average = " + avg.toFixed(2) + "\nPercentage = " + perc.toFixed(2) + "%");
}

// 5. Custom indexOf
function customIndexOf() {
  var str = prompt("Enter a string:");
  var ch = prompt("Enter a character to find:");
  var pos = -1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      pos = i;
      break;
    }
  }
  if (pos === -1) {
    alert("Character not found.");
  } else {
    alert("Character found at index " + pos);
  }
}

// 6. Delete all vowels
function removeVowels() {
  var str = prompt("Enter a sentence (max 25 chars):");
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  alert("Without vowels: " + result);
}

// 7. Count successive vowels with switch
function countVowelPairs() {
  var text = prompt("Enter a line of text:");
  var count = 0;
  text = text.toLowerCase();

  for (var i = 0; i < text.length - 1; i++) {
    var pair = text[i] + text[i + 1];
    switch (pair) {
      case "aa": case "ae": case "ai": case "ao": case "au":
      case "ea": case "ee": case "ei": case "eo": case "eu":
      case "ia": case "ie": case "ii": case "io": case "iu":
      case "oa": case "oe": case "oi": case "oo": case "ou":
      case "ua": case "ue": case "ui": case "uo": case "uu":
        count++;
        break;
    }
  }
  alert("Successive vowels found: " + count);
}

// 8. Distance converter
function distanceConverter() {
  var km = parseFloat(prompt("Enter distance in km:"));
  function toMeters(k) { return k * 1000; }
  function toFeet(k) { return k * 3280.84; }
  function toInches(k) { return k * 39370.1; }
  function toCm(k) { return k * 100000; }

  alert(
    "Meters: " + toMeters(km) +
    "\nFeet: " + toFeet(km) +
    "\nInches: " + toInches(km) +
    "\nCentimeters: " + toCm(km)
  );
}

// 9. Overtime pay
function overtimePay() {
  var hours = parseInt(prompt("Enter hours worked:"));
  if (hours > 40) {
    var overtime = (hours - 40) * 12;
    alert("Overtime pay = Rs. " + overtime);
  } else {
    alert("No overtime. Hours <= 40.");
  }
}

// 10. Currency notes
function currencyNotes() {
  var amount = parseInt(prompt("Enter amount to withdraw (in 100s):"));
  var total = amount * 100;

  var hundreds = Math.floor(total / 100);
  var fifty = Math.floor((total % 100) / 50);
  var ten = Math.floor(((total % 100) % 50) / 10);

  alert("100s: " + hundreds + "\n50s: " + fifty + "\n10s: " + ten);
}
