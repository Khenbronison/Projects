// // const name = a => console.log(a)

// // name("Ken")

// // const name = "Ken"

// // console.log(`Hello loved ones, i am ${name}`)
// // console.log(`${1+3}`)
// // const paragraph = (`This is a paragrah
// //     that should be on seperate
// //     lines or so`)
// //     console.log(paragraph)

// //     let num1 = 20
// //     let num2 = 10

// //     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)

//     // const greet = name => `Hello, ${name}`
//     // console.log(`Message: ${greet("Ken")}`)

//     // const subject = ["Fench", "Maths", "Twi"]
//     // const [, sub2, sub3] = subject

//     // console.log(sub2)

//     // const numbers = [1,2,3,4,5,6]
//     // const [num1, num2, num3, ...rest] = numbers
//     // console.log(num1,num2)
//     // console.log(...rest)

// //     const person = { name: "Ken", age: 25, location: "Ghana" };
// // const { name, age, location } = person;

// // console.log(name);     // Output: Ken
// // console.log(age);      // Output: 25
// // console.log(location); // Output: Ghana

// // const person = { name: "Ken", age: 25 };
// // const { name: fullName, age: years } = person;

// // console.log(fullName); // Output: Ken
// // console.log(years);    // Output: 25

// // function greet({ name, age }) {
// //     return `Hello, ${name}! You are ${age} years old.`;
// //   }
  
// //   const person = { name: "Ken", age: 25 };
// //   console.log(greet(person));
// //   // Output: Hello, Ken! You are 25 years old.
  
// // function sum(...args){

// // }

// // class Person {
// //     // Constructor
// //     constructor(name, age) {
// //       this.name = name;  // Assigning values to object properties
// //       this.age = age;
// //     }
  
// //     // Method
// //     greet() {
// //       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// //     }
// //   }
  
// //   // Creating an instance of the class
// //   const person1 = new Person("Ken", 25);
  
// //   // Accessing properties and methods of the class
// //   console.log(person1.name);  // Output: Ken
// //   console.log(person1.age);   // Output: 25
// //   person1.greet();            // Output: Hello, my name is Ken and I am 25 years old.
  
// // const name = "Ken";
// // const age = 25;

// // const person = {
// //   name: name,
// //   age: age,
// // };

// // console.log(person); // Output: { name: "Ken", age: 25 }
// // const name = "Ken";
// // const age = 25;

// // const person = { name, age };

// // console.log(person); // Output: { name: "Ken", age: 25 }

// // function* counter(){
// //     for(let i = 1; i<=5; i++){
// //         yield i;
// //     }
// // }
// //     const counter = [1,2,3,4,5]
// // for (const number of counter){
// //     console.log(number)
// // }

// // const calculateArea = (width = 1, height = 2) => width * height

// // console.log(calculateArea())

// // const person = {name: "Ken", age: 24}

// // const {name, age} = person

// // console.log(name)

// // const number = [1,2,3,4,5]

// // const [one,two,three] = number

// // console.log(one)

// // function sumAll(...args) {
// //     return args.reduce((sum, current) => sum + current, 0);
// // }

// // // Example usage:
// // console.log(sumAll(1, 2, 3));      // Output: 6
// // console.log(sumAll(10, 20, 30));   // Output: 60
// // console.log(sumAll());             // Output: 0

// // function sayHiBye(firstName, lastName) {
// //     // Nested helper function
// //     function getFullName() {
// //         return firstName + " " + lastName;
// //     }

// //     // Returning a string instead of just printing
// //     return "Hello, " + getFullName() 
// //     return "Bye, " + getFullName()
// // }

// // console.log(sayHiBye("Ken", "Amoah"));

// let phrase = "Hello";


// function sayHi() {
//     if (true) {
//         let user = "John";
//       }
//     console.log(`${phrase}, ${user}`);
   
//   }
// sayHi()

// console.log(2.2456 / 2)
// console.log(Math.pow(5,2))
// let fruit = ["Head", "Mouth", "Nose"]
// let fruits = new Array("Head", "Mouth", "Nose");
// console.log(fruit[1])


// function sayHi(name){
//     console.log("Hello " + name)
// }
// sayHi("Ken")

// function calucaltor(num1,num2){
//     return (num1 + num2)
// }
// console.log(calucaltor(3,4))

// let person = {
//     name: "Ken",
//     age: 20,
//     isMale: true,
//     occupation: "Programmer",
//     printName:function(){
//         return( "Hey " + this.name)
//     }
// }

// person.printName()

// Spread operator
// const set1 = [1,2,3,4,5,6]
// const set2 = [7,8,9,10,11]

// // const fullSet = [...set1,...set2]


// // const arg1 = fullSet
// const spreadFunction = () => Math.min(...set1);

// console.log(spreadFunction())

//QUESTION ONE
/*It iterates over the loop such that it starts from an initial value of i=0 and checks for a condition 
that is i<5; which means as long as the condition is not met the initial value i=0 should increment i++.
So after the loop runs we will have an output of 0,1,2,3,4

The only bug here is that the "var"  ignores the curly braces, this means that the value of i can still be accessed outside that scope. A way to solve his is by using the "let". The "let" is block scoped which means that it can't be 
accessed outside the loop
*/

//QUESTION 2
/**
 * The loop iterates over the array such that the initial value is set to i=0 and checks for the condition
 * where i<numbers.length that is the number of values within the array and increments the value of i++
 * So the loop passes the i value into the array as an index and that prints out the value within the array. So we expect an output of 1,2,3,4,5
 * 
 * There are no necessary bugs that need to be fixed
 */

// QUESTION THREE
// let fruits = ["apple", "banana", "cherry"];
// for (let fruit in fruits) {
//   console.log(fruits[fruit]);
// }

/**
 * The problem here is that we are using a for in loop so what happens is let "fruit" represent any of the elements in the array, so when we console.log the array the "fruit" should be passed into the array as an index to "fruits"
 */

//QUESTION FOUR
/**
 * This is an infinite loop
 * this does not have an increment like i++
 * So it continues printing 0
 */

// QUESTION FIVE
/**
 * It iterates over the loop such that it starts from an initial value of i=0 and checks for a condition 
that is i<5; which means as long as the condition is not met the initial value i=0 should increment i++.
So after the loop runs we will have an output of 0,1,2,3,4

And there is no necessary bug to fix
 */

// QUESTION SIX
/**
 * There is no problem with this code snippet
 */

// QUESTION 7
// The for of loop iterates and picks up each element in the array and prints out the values of the array; Alice, Bob and Charlie

// QUESTION 8
/**
 * In this loop the iteration logs out the values from 0 to 4 because count decreases by one at each iteration, belo is the corrected version
 */
// let count = 10;
// for (let i = 0; i < count; i++) {
//   console.log("Iteration: " + i);
// }

// // QUESTIONS 9
// const colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }
/**
 * This will output the elements within colors "red,"green","blue and there are no issues
 */

// QUESTION 10
/**
 * The pop method applied removes the last element at every iteration; so at the first iteration, 5 is removed in that order, a way to fix it will be using the while loop
 */
// let numbers = [1, 2, 3, 4, 5];
// while (numbers.length > 0) {
//   console.log(numbers.pop());
// }

// QUESTION 11
// function fizzBuzz(n){
//   for(let i = 1; i <= n; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//       console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//       console.log ("Fizz")
//     }
//     else if(i % 5 === 0){
//       console.log("Buzz")
//     }
//     else{
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(15);

// QUESTION 12
function countVowels(stringWord) {
  let count = 0;  
  let vowels = "aeiouAEIOU"; 

  for (let i = 0; i < stringWord.length; i++) {
    if (vowels.includes(stringWord[i])) { 
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("hello world"));       
