console.log("js linked working check");

var count = 0;
let outPut = document.getElementById("output");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add").addEventListener("click", clickAdd);
  document.getElementById("subtract").addEventListener("click", clickSubtract);
});

function clickAdd() {
  var inputValue = Number(document.getElementById("input").value);
  count = count + inputValue;
  updateDisplay();
}

function clickSubtract() {
  var inputValue = Number(document.getElementById("input").value);
  count = count - inputValue;
  updateDisplay();
}

function updateDisplay() {
  outPut.textContent = count;
  // change color to red if count is < 0
  if (count < 0) {
    outPut.style.color = "red";
  } else {
    outPut.style.color = "black";
  }
}
