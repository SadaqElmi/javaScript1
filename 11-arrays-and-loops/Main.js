/*const numbers = [10, 20, 30];
numbers[2] = 99;
console.log(numbers);

function getLastValue(array) {
  for (i = 0; i < array.length; i++) {
    const index = array[i];
    console.log(index);
  }
}
getLastValue([10, 20, 30, 40]);
getLastValue(["hi", "hello", "good"]);

function arraySwap(array) {
  const lastIndex = array.length - 1;

  const getLastValue = array[lastIndex];
  const firstIndex = array[0];
  array[0] = getLastValue;
  array[lastIndex] = firstIndex;

  return array;
}

console.log(arraySwap([10, 20, 30, 40, 50]));

for (i = 0; i <= 10; i++) {
  console.log(i);
}

for (i = 5; i >= 0; i--) {
  console.log(i);
}

// First loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Second loop
let ind = 5;
while (ind >= 0) {
  console.log(i);
  i--;
}
*/
function addOne(array) {
  const result = [];
  for (i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }
  return result;
}
console.log(addOne([1, 2, 3]));

function Addnum(array, num) {
  const result = [];
  for (i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }
  return result;
}
console.log(Addnum([1, 2, 3], 2));

function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));

function countPositive(nums) {
  let result = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }
  return result;
}

console.log(countPositive([1, -3, 5]));

// Challenge Exercise

function minMax(nums) {
  const result = {
    min: null,
    max: null,
  };
  for (i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (result.min === null || value < result.min) {
      result.min = value;
    }

    if (result.max === null || value > result.max) {
      result.max = value;
    }
  }
  return result;
}
console.log(minMax([1, -3, 5]));

console.log(minMax([]));
console.log(minMax([3]));

function countWords(words) {
  const result = {};
  for (i = 0; i < words.length; i++) {
    const word = words[i];

    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}

console.log(countWords(["apple", "sadaq", "sadaq", "sadaq", "elmi"]));
