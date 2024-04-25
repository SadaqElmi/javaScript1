function text() {
  const btn = document.querySelector(".js-button");
  if (btn.classList.contains("js-button")) {
    console.log("Yes!");
  } else {
    console.log("No!");
  }
}

// chalange Exercise

function changeBack(onOrOf) {
  const btn = document.querySelector(onOrOf);
  if (!btn.classList.contains("is-toggled")) {
    btn.classList.add("is-toggled");
  } else {
    btn.classList.remove("is-toggled");
  }
}

function InputMoney() {
  const input = document.querySelector(".js-input");
  let cost = Number(input.value);
  if (cost < 0) {
    document.querySelector(".js-error").innerHTML =
      "Error: cost connot be less than $0";
    return;
  }
  if (cost < 40) {
    cost += 10;
  }
  document.querySelector(".js-result").innerHTML = `$${cost}`;
}

// Calcute

let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
  calculation += value;
  displayCalculate();
  saveCalculation();
}
function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function displayCalculate() {
  let displayCart = (document.querySelector(
    ".displayCal"
  ).innerHTML = `Calculate: ${calculation}`);
}
