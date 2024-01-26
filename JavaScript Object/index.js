//! usage of object in javascript ------------------------------>>
// this = reference of a object where THIS is used
// example 1
const myDetails = {
  firstName: "Shazid",
  lastNmae: "Hossain",
  age: 21,
  isEmployed: false,
  quote: () => {
    console.log("Failing is OK");
  },
};
myDetails.quote(); //Failing is OK
console.log(myDetails.firstName); // Shazid
console.log(myDetails.lastNmae); //Hossain
console.log(myDetails.age); //21
console.log(myDetails.isEmployed); //false
console.log(myDetails); //{firstName: 'Shazid', lastNmae: 'Hossain', age: 21, isEmployed: false}

//example 2
const anotherDetails = {
  firstName: "John",
  lastNmae: "Wick",
  age: 24,
  isEmployed: true,
  quote: function () {
    console.log(
      "The knife is in your aorta. You pull it out, you will bleed and you will die. Consider this a professional courtesy."
    );
  },
};

anotherDetails.quote();
console.log(anotherDetails.firstName); // Shazid
console.log(anotherDetails.lastNmae); //Hossain
console.log(anotherDetails.age); //21
console.log(anotherDetails.isEmployed); //false
console.log(anotherDetails); //{firstName: 'John', lastNmae: 'Wick', age: 24, isEmployed: true}

//!usage of this keyward in Javascript ---------------------------------->>
// example
const personDetails = {
  name: "Tom Cat",
  favFood: "Fish",
  sayHello: function () {
    console.log(`hi! I am ${this.name}`); //i am tom cat
    console.log(`hi! I am ${personDetails.name}`);
    //no difference in two lines
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`); //tom catis eating fish
  },
};
personDetails.sayHello();
personDetails.eat();

// another example
console.log(this);
//!arrow function e this keyward kaj kore na

//! usage of constructors is javascript ----------------------------------------->
//this is reusable
function car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`i am driving the ${this.make}`);
  };
}
//this is reusable

const car1 = new car("audi", "000", 2000, "black");
const car2 = new car("ford", "001", 2001, "blue");

console.log(car1); //car {make: 'audi', model: '000', year: '2000', color: 'black'}
console.log(car1.make); // audi
console.log(car1.model); // 000
console.log(car1.year); // 2000
console.log(car1.color); // black

console.log(car2);
console.log(car2.make); //ford
console.log(car2.model); //001
console.log(car2.year); //2001
console.log(car2.color); // blue

//using the function in the constructor
car1.drive(); // i am driving the audi
car2.drive(); // i am driving the ford




