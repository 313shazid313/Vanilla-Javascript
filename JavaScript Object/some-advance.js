const nothing = {};

console.log(nothing);

const someThing = {};

someThing.name = "shazid";
someThing.id = 666;

console.log(someThing);

// making a object in another object in onother object

const another = {
  email: "shazid@gmail.com",
  data: {
    isAdmin: true,
    age: 22,
    fullName: {
      name: "Md. Shazid Hossain",
      
    },
  },
};

console.log(another);
