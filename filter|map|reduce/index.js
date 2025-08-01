// Implicit return with () // immediate return
const getNumber1 = () => 5; // returns 5

// Block body with {}, requires return keyword
const getNumber2 = () => {
  return 5;
}; // also returns 5

// But if you forget return inside {}, it returns undefined
const getNumber3 = () => {
  5;
}; // returns undefined ❌

const numbers = [21, 321, 123, 12334, 312, 567, 976];

// filter-------------------->
const data = numbers.filter((num) => {
  num < 500;
});

const data2 = numbers.filter((num) => num > 500);
const data3 = numbers.filter((num) => {
  return num > 500;
});

const db = require("./db.json");

const test = db.filter((x) => {
  if (x.rating < 4) return x;
});

console.log(test);

// forEach loop ---------------->
const data4 = [];

data4.forEach((num) => {
  if (num > 500) {
    data4.push(num);
  }
});

console.log(data);
console.log(data2);
console.log(data3);

// map ----------------->
const num2 = [3, 14, 5, 1, 6, 8, 4, 7];

const newNums = num2.map((x) => x + 2);
// requires return keyword
const newNums1 = num2.map((x) => {
  return x + 2;
});
// also we can use double map
const newNums2 = num2
  .map((x) => x * 2)
  .map((x) => x + 4)
  .filter((x) => x > 14);

console.log(newNums);
console.log(newNums1);
console.log(newNums2);

// reduce --------------------->
const myNums3 = [1, 2, 3];

const totals = myNums3.reduce(function (acc, currentVal) {
  return acc + currentVal;
}, 0);

// with arrow function
const totals1 = myNums3.reduce((acc, currentVal) => {
  return acc + currentVal;
}, 0);

console.log(totals);
console.log(totals1);
