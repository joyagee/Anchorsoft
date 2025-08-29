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


// Strictly not Equal to
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

// // . Less Than or Equal To (<=):
// if (statement <= 7) {
//   console.log("statement Greater!");
// } else {
//   console.log("Statment lesser!");
// }



// classwork
// create 2 object and 3 vairiable create an array that will house obj and var, 
// get 1 string and 1 number of the object acess it from the array
// , from the array change the value of 2 of your variable one of the var should be a constant


//logical and (&&)

// let result = 10 > 9 && 30 < 20;


// //logical OR (||)
// let result2 = 10 > 9 || 30 < 20;

// //logical NOT (!)
// let result3 = !(3 !== "3");
// console.log(result3);

// //TINARY
// let age =17;
// let hasdriverlincence = true ;

// let result4=
// age >= 18 && hasdriverlincence 
// ? "you are eligible to drive."
// : "you are not eligible to drive";

// console.log(result4);

// const Averagechecker =(a, b, c)=> {
//   const average =(a + b + c)/3;
//   return average ;
// };


// const evenoddchecker=(a, b, c)=>{
//   const newAverage= Averagechecker(a, b, c);
//   const check= newAverage % 2 === 0 ? "isEven" : "isOdd"

//   return check ;
// }

// const checkaverageevenodd = evenoddchecker(4, 6, 8);
// console.log(checkaverageevenodd);


//CLASSWORK


// const OddEvenchecker =(a, b)=>{
//   let sub = b-a;
//   let mul = a*b
// const check = (a % 2 === 1) > b ?   
//   ;


// return check ;
// }
// const result = OddEvenchecker =(5, 6);
// console.log(result);

//14 august class


const receivers = (a, b) => {
  let sum;
  let mul;
  const result =
    a > b && a % 2 === 1
      ? `  ${(sum = a - b
      )}`
      : `${(mul = a * b
      )}`;
  return result;
};

const final = receivers(5, 7);
console.log(final);


// const AverageChecker = (a, b, c) => {
//   const average = (a + b + c) / 3;
//   return average;
// };

// function smallestNumber(a, b, c) {
//   let sum;
//   const average = AverageChecker(a, b, c);
//   let smallest;
//   if (a < b && a < c) {
//     smallest = a;

//   } else if (b < a && b < c) {
//     smallest = b;

//   } else {
//     smallest = c;

//   }


//   sum = smallest + average;
//   return sum;


// }

// const result = smallestNumber(4, 2, 6);
// console.log("Result:", result);


//****Control flow */

//if statement***
const minAge = 18;
let userAge;

function checkEntry(age) {
  if (age < minAge) {
    console.log("Sorry, you are not allowed in here.");
  } else {
    console.log("Welcome to the site");
  }
}
checkEntry(18);

const gifting = (age, gender, name) => {
  let details;
  if (age < 18 && gender === "female") {
    console.log("give them barbie");
    details = `${name} was given a barbie`;
  } else if (age < 18 && gender === "male") {
    console.log("give them football");
    details = `${name} was given a football`;
  } else if (age >= 18 && gender === "female") {
    console.log("give them brazillian hair");
    details = `${name} was given brazillian hair`;
  } else if (age >= 18 && gender === "male") {
    console.log("give them a car");
    details = `${name} was given a car`;
  } else {
    console.log("Unknown Fellow");
    details = "NO gift given"
  }

  return details;
}

// const result = gifting(18, "male", "Sam");
// console.log("Result:", result);

//Switch statement
let dayscount = 7;
let day;

switch (dayscount) {
  case 1:
    //console.log("Monday");
    day = "Monday";
    break;
  case 2:
    //console.log("Tuesday");
    day = "Tuesday";
    break;
  case 3:
    //console.log("Wednesday");
    day = "Wednesday";
    break;
  case 4:
    //console.log("Thursday");
    day = "Thursday";
    break;
  case 5:
    //console.log("Friday");
    day = "Friday";
    break;
  case 6:
    //console.log("Saturday");
    day = "Saturday";
    break;
  case 7:
    //console.log("Sunday");
    day = "Sunday";
    break;

  default:
    console.log(" count day");

    break;
}

//console.log("day:", day);

//for loop
const numList = [3, 5, 1, 8, 7, 2, 9, 4]
for (let i = 0; i < numList.length; i++) {
  const numResult =
    numList[i] % 2 === 0 ? `${numList[i]} is even` : `${numList[i]} is odd`;
  console.log(numResult);
  console.log(i);
}


const numm = [3, 5, 1, 8, 7, 2, 9, 4];
const AverageChecker = (num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
    console.log(num[i]);
    const check = num[i] % 2 === 0 ? `${num[i]} is even` : `${num[i]} is odd`;
    console.log(check);
  }

  const average = sum / num.length;
  return average;
};

function evenOddChecker(num) {
  const newAverage = AverageChecker(num);

  const check = newAverage % 2 === 0 ? "isEven" : "isOdd";
  console.log();

  return check, newAverage;
}

const checkAverageEvenOdd = evenOddChecker(numm);
console.log(checkAverageEvenOdd);


//factory example

const creatcars = (name, colour, model, description) => {
  return {
    name,
    colour,
    model,
    description() {
      console.log(`cars like ${this.name} are common in  ${this.colour} colours ,with model ${this.model} are most common `);


    },

  }


}
const result = creatcars("toyota", "gray", 2007,);

//constructionexample

console.log("description:", result.description());

function shoebrands (name,brand, price, colour, size, output) {
this.name= name ;
this.brand=brand ;
this.price =price ;
this.colour= colour ;
this.size = size ;

this.output =function () {
      console.log(` ${this.name} have  ${this.brand} which you can purschase fo  ${this.price} best  ${this.colour}  available in size  ${this.size}`);
};

  
};
const results =new shoebrands ("nike", "pouch" ,"$47", "brown", 45 )
console.log("description:", results.output());


//assignment on construction
// function product (name, price, type, sell,stock,quantity) {

// }

//26th AUGUST CLASS MORE EXAMPLES ON FACTORY EXAMPLES
//FACTORY EXPLANATION
const DelightPerson ={
  name :"Delight",
  age : 20,
  greet: function (){
    console.log(
      `hello my name ${this.name} and i am ${this.age} years old`
    );
    
  },
}

function personfactory (name, age, bio, sex, color) {
  return {
    name,
    age,
    bio,
    sex,
    color,

    greet() {
      console.log(`my name is ${this.name} and i am ${this.age} years old `);


    },

  }


}

const persn1= personfactory( "favour", 20, "i am a programmer","female","brownskin");
console.log("person1:", persn1, "\n" ,"greet:", persn1.greet());

const persn2= personfactory( "fred", 33, "i am a business inclined programmer","male","brownskin");
console.log("person2:", persn2, "\n" ,"greet:", persn2.greet());


//EXAMPLE CONTINUATION ON CONSTRUCTOR

function HumanConstructor (name, age, bio, sex, color){
this.name = name;
this.age = age;
this.bio = bio;
this.sex = sex;
this.color = color;

this.greet = function(){
  console.log(`my name is ${this.name} and i am ${this.age} years old`);
  
};

}

HumanConstructor.prototype.greet =function (name, bio) {
  console.log(`my name is ${name}. ${bio}`);
  
}
const human1 = new  HumanConstructor (
  "malik", 23, "i am a business man", "male", "darkskin"
)

const human2 = new  HumanConstructor (
  "Arnold", 23, "i am a business man", "male", "darkskin"
)

console.log("human1", human1,"greet", human1.greet);
console.log("human2", human2,"greet", human2.greet);

//28 august 2025

const fruits =["apple", "banana", "orange", " mango", "pear"]
console.log(fruits);
fruits[1]= "grape";
console.log(fruits);

fruits.pop();
console.log(fruits, "\n");
fruits.push("mango");
console.log(fruits, "\n");


fruits.unshift(2);
console.log(fruits, "\n");
console.log(fruits, "\n");
fruits.shift();


console.log( "previous fruit:", fruits, "\n");

const sliceAdd= fruits.splice(1, 2, "66", "88");
const slicee =fruits.splice(1,2)
console.log( "sliced fruit:", fruits, "\n");
console.log( "new sliceAdd:", sliceAdd, "\n");
console.log( "neWlice:", slicee, "\n");

const sliceTest= fruits.slice(1,3)
console.log( "sliced fruit:", fruits, "\n");
console.log( "sliceD:", sliceTest, "\n");
fruits.forEach((item)=> console.log(item));





//filter
const nums = [1, 2 , 3 , 4, 5, 6]

const doubleNumbers = numbers.map((number)=>number *2)
numbers.filter((num)=> {
  if (num % 2 !== 0) console.log(num);
  
});
console.log(typeof doubleNumbers);

const sum = numbers.reduce((acc, curr)=> acc + curr, 0);
const less = numbers.find((num)=>num > 2)
console.log("sum:", less);

const hasEvenNumber = numbers.some((number)=>number % 2 === 0);
console.log(hasEvenNumber);

const allEvenNumber = numbers.every((number)=>number % 2 === 0);
console.log(allEvenNumber);

const indexx = numbers.findindex((num)=>num % 2 === 0);
console.log("index:", indexx);

numbers.reverse();
console.log(numbers);

console.log(numbers.includes(6));










