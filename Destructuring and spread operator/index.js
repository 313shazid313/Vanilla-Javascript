//array destructuring
let arr = [32, 36, 43, 324, 123, 365]; //3 ta nia bakigula ignore korbe
let [a, b, c] = arr;

// let x = arr[0];//Na likhleo chole
// let y = arr[1];//Na likhleo chole

console.log(a); //32
console.log(b); //36
console.log(a, b, c); //32 36 43

//! spread operator
let arr2 = [12, 24, 11, 53, 54, 98, 55, 88];
// example-1
let [p, q, r, ...rest] = arr2; //rest is spread operator variable
console.log(p, q, r, rest); //12 24 11 [53, 54, 98, 55, 88]

// example 2
let [p1, , , ...rest1] = arr2;
console.log(p1, rest1); //12 [53 54 98 55 88]

//example 3 //usage most of the time
let { p2, p3 } = { p2: 2, p3: 0 };
console.log(p2, p3); //2 0

//converting array to object
const arr3 = [34, 63, 84, 55];
const obj = { ...arr3 };
console.log(obj); //output -> converted object --> {0: 34, 1: 63, 2: 84, 3: 55}

//example with function --> start
const arr4 = [4, 5, 9, 10];
function sum(s1, s2, s3) {
  return s1 + s2 + s3;
}
console.log(sum(...arr4)); //output --> 18 //first 3 nunber sum hobe
//example with function --> end

//usage in react
let obj9 = {
  name: "shazid",
  company: "tomtom",
  home: "wikipedia",
};
console.log({ ...obj9, name: "wick" }); //name wick override korbe
console.log({ name: "wick", ...obj9 }); //obj9 pore likhle override hobe na //kono value change hobe na

const x = 20;
console.log(x);

//! Object Destructuring example 1
const person = {
  name1: "Alice",
  ageNum: 25,
  city: "New York",
};

const { name1, ageNum } = person;

console.log(name1); // "Alice"
console.log(ageNum); // 25

//! object Destructuring example 2
const person1 = {
  name2: "Alice",
  age2: 25,
  city2: "New York",
};

// Destructuring with renaming
const { name2: firstName, age2: yearsOld } = person1;

console.log(firstName); // "Alice"
console.log(yearsOld); // 25

//! nested destructuring
const person3 = {
  name3: "Alice",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  name3,
  address: { city, zip },
} = person3;

console.log(name3); // "Alice"
console.log(city); // "New York"
console.log(zip); // "10001"

//! Destructuring Function Parameters example 1

function printColors([first, second]) {
  console.log(`First Color: ${first}, Second Color: ${second}`);
}
const colors = ["red", "green"];
printColors(colors); // "First Color: red, Second Color: green"

//! Destructuring Function Parameters example 2
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person99 = { name: "Alice", age: 25 };
printPerson(person99); // "Name: Alice, Age: 25"
