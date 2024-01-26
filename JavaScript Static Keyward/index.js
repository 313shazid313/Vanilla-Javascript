//example 1
class mathUtil {
  static PI = 3.1416;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}
console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getCircumference(5));
console.log(mathUtil.getArea(10));

//example 2
class Users {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    Users.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${Users.userCount} online`);
  }

  sayHi() {
    console.log(`my username is ${this.username}`); //`` dia template string bujhai
  }
}
const user1 = new Users("Shazid");
const user2 = new Users("Shakib");
const user3 = new Users("Key");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(Users.username); //undefined

user1.sayHi(); //my username is Shazid
user2.sayHi(); //my username is Shakin
Users.getUserCount(); //there are three online
