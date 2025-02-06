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
let count = 10;
for (let i = 0; i < count; i++) {
  console.log("Iteration: " + i);
}

// // QUESTIONS 9
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
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

// // QUESTION 11
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
// // function countVowels(stringWord) {
// //     let count = 0;  
// //     let vowels = "aeiouAEIOU"; 
  
// //     for (let i = 0; i < stringWord.length; i++) {
// //       if (vowels.includes(stringWord[i])) { 
// //         count++;
// //       }
// //     }
    
// //     return count;
// //   }
  
// //   console.log(countVowels("hello world"));  
  
// //   let num = 15
// //   let checkNum = num % 3 === 0 ? "Hello World" :  "Hello"
// //   console.log(checkNum)
// // const add = (a,b)=> a+b;

// 1. c
// 2. c
// 3. a
// 4. == compares just values nut === compares values and data types
// 5. 
// function findLargestNumber(arr){
//   return (Math.max(arr))
// }
// console.log(findLargestNumber([3,7,2,8,5]))
