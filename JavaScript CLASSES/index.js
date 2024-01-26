// class = (es6 feature) provides a more structured and cleaner way to work
// with objects compare to traditional functions ex.
// static keyward, encapsulation ,inheritance

class userDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`Name : ${this.name}`);
    console.log(`age : ${this.age}`);
  }
  calculateBounty(ArcNumber) {
    return this.age + this.age * ArcNumber;
  }
}

const ArcNumber = 5;
const detail1 = new userDetails("Luffy", "18");
const detail2 = new userDetails("Zoro", "21");

detail1.display(); //Name : Luffy //age : 18
detail2.display(); //Name : Zoro //age : 21

const totalBountyLuffy = detail1.calculateBounty(ArcNumber);
const totalBountyZoro = detail2.calculateBounty(ArcNumber);

console.log(`Total bounty of ${detail1.name} is ${totalBountyLuffy} `) //Total bounty of Luffy is 1890 
console.log(`Total bounty of ${detail2.name} is ${totalBountyZoro} `) //Total bounty of Zoro is 21105 