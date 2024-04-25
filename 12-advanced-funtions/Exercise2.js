const multipy = (a, b) => a * b;
console.log(multipy(2, 3));

let count = 0;
const countPositive = (nums) => {
  nums.forEach((element) => {
    if (element > 0) {
      count++;
    }
  });
  return count;
};

console.log(countPositive([1, -3, 5]));

const addNum = (array, num) => {
  return array.map((value) => value + num);
};

console.log(addNum([1, 2, 3], 1));

let removeindex = 0;
const removeEgg = (foods) => {
  return foods.filter((food) => {
    if (food === "egg" && removeindex < 2) {
      removeindex++;
      return false;
    }
    return true;
  });
};

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

const button = document.querySelector(".js-button");

button.addEventListener("click", () => {
  updateButton();
});
function updateButton() {
  setTimeout(function () {
    button.innerHTML = "Finished!";
  }, 1000);
}

const btnAdd = document.querySelector(".js-add-btn");

btnAdd.addEventListener("click", () => {
  messages++;
  displayNotification();
});

const btnRemove = document.querySelector(".js-remove-btn");

btnRemove.addEventListener("click", () => {
  if (messages > 0) {
    messages--;
    if (messages === 0) {
      stopNotification();
    }
  }
});
let messages = 2;

let intervalId;

let isDisplayingNotification;

displayNotification();

function displayNotification() {
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(function () {
    if (document.title === "App") {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = "App";
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = "App";
}

// Challenge Exercise
