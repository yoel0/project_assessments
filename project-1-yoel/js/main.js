console.log("js linked working check");

var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add").addEventListener("click", clickAdd);
  document.getElementById("subtract").addEventListener("click", clickSubtract);
});

function clickAdd() {
  var inputValue = Number(document.getElementById("input").value);
  count = count + inputValue;
  updateDisplay();
}

function clickSubtract(outputValue, inputValue) {
  var inputValue = Number(document.getElementById("input").value);
  count = count - inputValue;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("output").textContent = count;

  // change color to red if count is < 0
}
