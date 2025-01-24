// const name = a => console.log(a)

// name("Ken")

// const name = "Ken"

// console.log(`Hello loved ones, i am ${name}`)
// console.log(`${1+3}`)
// const paragraph = (`This is a paragrah
//     that should be on seperate
//     lines or so`)
//     console.log(paragraph)

//     let num1 = 20
//     let num2 = 10

//     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)

    // const greet = name => `Hello, ${name}`
    // console.log(`Message: ${greet("Ken")}`)

    // const subject = ["Fench", "Maths", "Twi"]
    // const [, sub2, sub3] = subject

    // console.log(sub2)

    // const numbers = [1,2,3,4,5,6]
    // const [num1, num2, num3, ...rest] = numbers
    // console.log(num1,num2)
    // console.log(...rest)

//     const person = { name: "Ken", age: 25, location: "Ghana" };
// const { name, age, location } = person;

// console.log(name);     // Output: Ken
// console.log(age);      // Output: 25
// console.log(location); // Output: Ghana

// const person = { name: "Ken", age: 25 };
// const { name: fullName, age: years } = person;

// console.log(fullName); // Output: Ken
// console.log(years);    // Output: 25

// function greet({ name, age }) {
//     return `Hello, ${name}! You are ${age} years old.`;
//   }
  
//   const person = { name: "Ken", age: 25 };
//   console.log(greet(person));
//   // Output: Hello, Ken! You are 25 years old.
  
// function sum(...args){

// }

// class Person {
//     // Constructor
//     constructor(name, age) {
//       this.name = name;  // Assigning values to object properties
//       this.age = age;
//     }
  
//     // Method
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   // Creating an instance of the class
//   const person1 = new Person("Ken", 25);
  
//   // Accessing properties and methods of the class
//   console.log(person1.name);  // Output: Ken
//   console.log(person1.age);   // Output: 25
//   person1.greet();            // Output: Hello, my name is Ken and I am 25 years old.
  
// const name = "Ken";
// const age = 25;

// const person = {
//   name: name,
//   age: age,
// };

// console.log(person); // Output: { name: "Ken", age: 25 }
// const name = "Ken";
// const age = 25;

// const person = { name, age };

// console.log(person); // Output: { name: "Ken", age: 25 }

// function* counter(){
//     for(let i = 1; i<=5; i++){
//         yield i;
//     }
// }
//     const counter = [1,2,3,4,5]
// for (const number of counter){
//     console.log(number)
// }

const calculateArea = (width = 1, height = 2) => width * height

console.log(calculateArea())

const person = {name: "Ken", age: 24}

const {name, age} = person

console.log(name)

const number = [1,2,3,4,5]

const [one,two,three] = number

console.log(one)

function sumAll(...args) {
    return args.reduce((sum, current) => sum + current, 0);
}

// Example usage:
console.log(sumAll(1, 2, 3));      // Output: 6
console.log(sumAll(10, 20, 30));   // Output: 60
console.log(sumAll());             // Output: 0
