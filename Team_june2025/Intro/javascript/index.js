const Person = {
  name: "Delight",
  age: 15,
  phone: "09076885543",
  adrees: "Canada",
  is_Male: true,
};
const Person1 = {
  name: "Favour",
  age: 12,
  phone: "09076885543",
  adrees: "Uk",
  is_Male: false,
};
const Person2 = {
  name: "Mrs Joy",
  age: 19,
  phone: "09076885543",
  adrees: "Spain",
  is_Male: false,
};

// console.log(Person.name);
// console.log(Person["name"]);

const thing = "ball";

const list = [Person, "you", 4, thing];
const people = [Person, Person1, Person2];

// console.log("person:", "name:", people[0].name,  "\ age:", people[0].age);
// console.log("person1:", "name:", people[1].name, "\ age:", people[1].age);
// console.log("person2:", "name:", people[2].name, "\ age:", people[2].age);

// console.log("thing:",list[3]);

// console.log("list:", list[0].adrees);
// console.log("object:", Person.adrees);
// console.log("people:", people);

// console.log("list:", list);

//Function

// function sayName(name) {
//   console.log(`My name is  ${name}`);
//   return name;
// }

// // console.log(sayName(""));

// const resul2 = sayName("Delight");

// const value = "Na true";
// const value2 = "Na lie";

// const nameCaller = (isValid) => {
//   if (isValid) {
//     return;
//   }
//   console.log("stattement is false");
//   console.log(value2);
// };

// const result = nameCaller(true);
// console.log(result);

//Addition
const num = 4 + 5;
// console.log(num);

//Subtraction
const num2 = 6 - 5;
// console.log(num2);

//Multiplication
const num3 = 6 * 5;
// console.log(num3);

//Division
const num4 = 6 / 5;
// console.log(num4);

//Modulos
const num5 = 6 % 5;
// console.log("modulous:", num5);

//Exponential
const num6 = 2 ** 3;
// console.log("modulous:", num6);

//Increment
let num7 = 2;
num7++;

// console.log("num7:", num7);
// console.log("num7:", num7++);

let num8 = 2;
// console.log("num8:", ++num8);

//Decrement
let num9 = 2;
num7++;
// console.log("num7:", num7);

// console.log("num7:", num7++);

let num10 = 2;
// console.log("num8:", ++num8);

//Assigment Operators
let x = 10; // x is assigned the value 10

//Addition Assignment
let y = 5;
// y += 3;
y = y + 3;
// console.log("y:", y);

//Subtraction Assignment
let z = 15;
z -= 7;

//Multiplication Assignment (_=):

let a = 3;
a *= 4;
// console.log("a:", a);

let statement = 7;

//Equalt to
// if (statement == "1") {
//   console.log("statement", statement);
// }

//Not Equal to
// if (statement != "1") {
//   console.log("Wrong statement!");
// }

// Strictly Equal to
// if (statement === "1") {
//   console.log("statement", statement);
// } else {
//   console.log("Nothing");
// }


// Strictly Equal to
// if (statement !== "1") {
//   console.log("statement", statement);
// } else {
//   console.log("Nothing");
// }

//. Greater Than (>):
// if (statement > 7) {
//   console.log("statement Greater!");
// } else {
//   console.log("Statment lesser!");
// }

// . Less Than (<)
// if (statement < 7) {
//   console.log("Statment lesser!");
// } else {
//   console.log("statement Greater!");
// }

// . Greater Than or Equal To (>=)
// if (statement >= 7) {
//   console.log("statement Greater!");
// } else {
//   console.log("Statment lesser!");
// }


// . Less Than or Equal To (<=):
if (statement <= 7) {
  console.log("statement Greater!");
} else {
  console.log("Statment lesser!");
}