// Append value to display
function appendValue(value) {
  document.getElementById("display").value += value;
}

// Clear all
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Delete last character
function deleteLast() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  var display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert("Invalid Expression!");
  }
}
