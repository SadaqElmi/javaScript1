let searchArray = ["sadaq", "elmi", "search", "abdulle", "search"];
let index = -1;
for (i = 0; i < searchArray.length; i++) {
  if (searchArray[i] === "search") {
    index = i;
    break;
  }
}
console.log(index);

function FindIndex(array, word) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
console.log(FindIndex(["sadaq", "Elmi", "Abdulle", "Jaamac"], "Abdulle"));

function removeEgg(foods) {
  let result = [];
  let eggsRemoved = 0;
  for (i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"].reverse()));

function removeEggs(foods) {
  // To prevent modifying the original array, we
  // can create a copy of the array using .slice()
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  // Advanced technique:
  // Since foods.slice() results in an array, we
  // can also use .reverse() directly like this:
  // foods.slice().reverse();

  // This technique is called "method chaining"
  // because we use one method after another
  // (like a chain of methods).
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === "egg" && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(reversedFoods[i]);
  }

  return result.reverse();
}

const foods = ["egg", "apple", "egg", "egg", "ham"];
console.log(removeEggs(foods));
console.log(foods);

// Chanllenge Exercise

for (i = 1; i < 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

function FindIndexs(array, word) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
// console.log(FindIndexs(["sadaq", "Elmi", "Abdulle", "Jaamac"], "Abdulle"));

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    // Using the findIndex() function from above, we
    // can check if the string is already in the
    // result array. If it's not in the result array
    // (index is -1), then add it to the result array.
    if (FindIndexs(result, word) === -1) {
      result.push(word);
    }
  }

  return result;
}
console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));
