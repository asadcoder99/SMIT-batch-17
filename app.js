// Quostion nO 1 -->
// AnswEr  -->

let itemsArray = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 }
];

let totalAll = 0;

for (let i = 0; i < itemsArray.length; i++) {
  let itemTotal = itemsArray[i].price * itemsArray[i].quantity;
  console.log(itemsArray[i].name + " total = " + itemTotal);
  totalAll += itemTotal;
}

console.log("Total price of all items = " + totalAll);



// Question no 2 -->
// ANsweR  -->

let user = {
  name: "Muhammad Asad",
  email: "asasmalik542@gmail.com",
  password: "12345",
  age: 18,
  gender: "male",
  city: "Karachi",
  country: "Pakistan"
};

console.log("age" in user);        // true
console.log("country" in user);    // true
console.log("firstName" in user);  // false
console.log("lastName" in user);   // false




// Question no #3 ------>
// AnswERr --->

function Student(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

let student1 = new Student("Asad", 18, "Karachi");
let student2 = new Student("Abdulla", 22, "Lahore");
let student3 = new Student("Raffy", 19, "Islamabad");

console.log(student1);
console.log(student2);
console.log(student3);


// Question n o 4 -->
// Answer -->


function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

let people = [];

let person1 = new Person("Muhammad Asad", "Male", "Karachi", "Graduate", "Web & App Devloper");
let person2 = new Person("Abdulla", "Male", "Lahore", "Graduate", "Web & App Devloper");

people.push(person1, person2);

console.log(people);
