let add = function () {
  console.log(2 + 3);
};
add();
add();

function runTime(fun) {
  fun();
  fun();
}
runTime(add);

function change() {
  document.querySelector(".js-btn").innerHTML = "Loading...";
  setTimeout(function () {
    document.querySelector(".js-btn").innerHTML = "Finished!";
  }, 3000);
}

// let timeUoT;
// function display() {
//   const displayElement = document.querySelector(".display");
//   displayElement.innerHTML = "Added";
//   clearTimeout(timeUoT);
//   timeUoT = setTimeout(function () {
//     displayElement.innerHTML = " ";
//   }, 2000);
// }

// Challenge Exercise

// setInterval(() => {
//   if (document.title === "Exercise") {
//     document.title = "(2) New  Massge";
//   } else {
//     document.title = "Exercise";
//   }
// }, 1000);

let messages = 2;

setInterval(function () {
  if (messages === 0) {
    document.title = "App";
  } else if (messages > 0) {
    if (document.title === "App") {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = "App";
    }
  }
}, 1000);
