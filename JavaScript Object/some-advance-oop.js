const aSymble = Symbol("i have keys");

const user = {
  name: "shazid",
  "full-name": "Md shazid Hossain",
  age: "22",
  email: "hossainshazid567@gmail.com",
  location: "Dhaka",
  [aSymble]: "any key",
};

console.log(user["email"]); // hossainshazid567@gmail.com
console.log(user["full-name"]); // Md shazid Hossain
console.log(user[aSymble]); // any key
console.log(user.name); // shazid
console.log("age"); // age

// overwriting email
user.email = "shazid@gmail.com";
console.log(user["email"]); // shazid@gmail.com

// freeze ::: after this overwrite will not work
// Object.freeze(user);

// overwriting email
user.email = "shazid@yahoo.com";
console.log(user["email"]); // shazid@gmail.com
console.log(user);

// ----------->>>>>
user.anything = function () {
  console.log("all ok");
};

user.something = function () {
  console.log(`the user name is ${this.name}`);
};

console.log(user.anything());
console.log(user.something());