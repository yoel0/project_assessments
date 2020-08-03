console.log("js link working check");

let count = 0;
let outPut = document.getElementById("output");

function updateDisplay() {
  outPut.textContent = count;
  // change color to red if count is < 0
  if (count < 0) {
    outPut.style.color = "red";
  } else {
    outPut.style.color = "black";
  }
}

function clickAdd() {
  let inputValue = Number(document.getElementById("input").value);
  count += inputValue;
  updateDisplay();
}

function clickSubtract() {
  let inputValue = Number(document.getElementById("input").value);
  count -= inputValue;
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addition").addEventListener("click", clickAdd);
  document
    .getElementById("subtraction")
    .addEventListener("click", clickSubtract);
});
