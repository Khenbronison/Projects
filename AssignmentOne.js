// // Question 1
// const factorial = num => num <= 1 ? 1 : num*factorial(num-1)
// console.log(factorial(5))

// // Question 2
//  const numbers = [1, 2, 3, 4, 5];
//  const squaredNumbers = numbers.map (num => num * num) 
//  console.log(squaredNumbers);

//  //Question 3
//  // Per my understanding, This in a regular function allows the "this" keyword to be use such that, when the "this" is used, it references the current object within which it was called. When a new object is createad the "this" keyword refers to the newly created object but within an arrow function it has a different behavior. When it is used within a function, it throws an error once a new object is created 
 
//  function House(color) {
//     this.color = color; // 'this' refers to the new house
//         function car (){
//             return `Hello`
//         }
//         function test (){
//             const something = "hello"
//             this.car()
//         }
//   }
//   const house1 = new House
//   house1.color = "blue"
//   console.log(house1.color)
//   console.log(house1.car)

// //   const House = () => this.color = 'blue';
// //   const house1 = new House
// //   console.log(this.color)

// //   Question 4
// function users (name,age, location){
//     this.name = name
//     this.age = age
//     this.location = location

//     this.greet = function(){
//         return `Hello, I am ${this.name}. I am ${this.age} and i reside in ${this.location} `
//     }
// }
// const user1 = new users ("James", 18, "Accra")
// console.log(user1.greet())

// // Question 5
// const tableHeaders = ["Name", "Age", "Country"];
// const tableRows = [
//   { name: "Ken Amoah", age: 25, country: "Ghana" },
//   { name: "John Doe", age: 30, country: "USA" },
//   { name: "Jane Smith", age: 28, country: "Canada" }
// ];

// const htmlTable = `
// <table border="1" style="border-collapse: collapse; width: 100%;">
//   <thead>
//     <tr>
//       ${tableHeaders.map(header => `<th>${header}</th>`).join("")}
//     </tr>
//   </thead>
//   <tbody>
//     ${tableRows.map(row => `
//       <tr>
//         <td>${row.name}</td>
//         <td>${row.age}</td>
//         <td>${row.country}</td>
//       </tr>
//     `).join("")}
//   </tbody>
// </table>
// `;
// console.log(htmlTable);

// // Question 6
// function toUppercaseTag(strings, ...values) {
//     // Map over the interpolated values, converting them to uppercase
//     const uppercasedValues = values.map(value => String(value).toUpperCase());
  
//     // Combine static strings with processed values
//     return strings.reduce((result, string, i) => {
//       return result + string + (uppercasedValues[i] || "");
//     }, "");
//   }
  
//   // Example usage
//   const name = "Ken Amoah";
//   const country = "Ghana";
  
//   const result = toUppercaseTag`Hello, my name is ${name} and I live in ${country}.`;
  
//   console.log(result);
  
// // Question 7
// const calculatePower = (base = 2, exponent = 3) => base ** exponent
// console.log(calculatePower());

// // Question 8
// /** With setting default parameters in the function definition, the moment the function is called  the default values are applied unless new values are assigned at the call of the function whilst handling them within the function body means that since the values are set within the function; it won't log any default values unless they are passed.
//  */

// // Question 9
// const executeWithDelay = (callback, delay = 1000) => setTimeout(callback, delay);
//     const sayHello = ()=> console.log("Hello, world!");
//     executeWithDelay(sayHello, 2000); // Output after 2 seconds: "Hello, world!"
//     executeWithDelay(sayHello); // Output after 1 second: "Hello, world!"

//     // Question 10
//     function extractNameAndCity(obj) {
//         const { name, address: { city } } = obj;
//         return { name, city };
//       }
      
//       // Example usage:
//       const person = { 
//         name: "Alice", 
//         age: 25, 
//         address: { city: "Wonderland", zip: "12345" } 
//       };
      
//       console.log(extractNameAndCity(person)); // Output: { name: "Alice", city: "Wonderland" }

//     //   Question 11
//     /**
//      * By destructuring the array in the opposite order, you can assign the values of two variables to it and then swap them out.
//      */
//     let first = 5;
//     let second = 10;
//     [first, second] = [second, first];
//     console.log(first); 
//     console.log(second);

// Question 12
//     function destructureWithDefaults(obj) {
//         const { name = "Unknown", age = 30, city = "Not specified" } = obj;
//         return { name, age, city };
//       }
      
//       // Example usage:
//       const person1 = { name: "Alice", age: 25 };
//       const person2 = { name: "Bob", city: "Wonderland" };
      
//       console.log(destructureWithDefaults(person1)); 
//       // Output: { name: "Alice", age: 25, city: "Not specified" }
      
//       console.log(destructureWithDefaults(person2)); 
//       // Output: { name: "Bob", age: 30, city: "Wonderland" }
      
//       console.log(destructureWithDefaults({})); 
//       // Output: { name: "Unknown", age: 30, city: "Not specified" }

// Question 13
          
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];
    const mergeArrays = (arr1, arr2) =>  ([...arr1, ...arr2]);
      console.log(mergeArrays(array1, array2)); 
      // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Question 14
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  // Example usage:
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(10, 20, 30, 40)); // Output: 100
  console.log(sum(5)); // Output: 5
  console.log(sum()); // Output: 0

  
// Question 5
/**
 * A shallow copy means that the properties of the original object are copied to a new object, but if any property is itself an object (or array), only a reference to the original object is copied, not a deep copy of it.
 */
const original = {
    name: "Alice",
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345"
    }
  };
  
  // Creating a shallow copy of the object using the spread operator
  const copy = { ...original };
  
  // Modifying the copy
  copy.name = "Bob";
  copy.address.city = "New Wonderland";
  
  console.log(original); // Output: { name: "Alice", age: 25, address: { city: "New Wonderland", zip: "12345" } }
  console.log(copy);     // Output: { name: "Bob", age: 25, address: { city: "New Wonderland", zip: "12345" } }

//   Question 16
    // Person class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Student class extending Person
  class Student extends Person {
    constructor(name, age, grade) {
      // Call the parent constructor (Person class)
      super(name, age);
      this.grade = grade;
    }
  
    // Overriding the introduce method to include grade
    introduce() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }
  }
  
  // Example usage:
  
  const person1 = new Person("Alice", 30);
  person1.introduce();  // Output: Hello, my name is Alice and I am 30 years old.
  
  const student1 = new Student("Bob", 20, "A");
  student1.introduce();  // Output: Hello, my name is Bob, I am 20 years old, and I am in grade A.
  
// Question 17
class InstanceCounter {
    static count = 0;
  
    constructor() {
      InstanceCounter.count++;
    }
  
    static getInstanceCount() {
      return InstanceCounter.count;
    }
  }
    
  const obj1 = new InstanceCounter();
  const obj2 = new InstanceCounter();
  const obj3 = new InstanceCounter();
  
  console.log(InstanceCounter.getInstanceCount()); // Output: 3

//   Question 18
/**
 * Methods belong to individual objects of a class. They operate on the specific data (instance variables) of that particular object whilst Static methods belong to the class itself, not to any specific object. They operate independently of any particular object.
 */

// Question 19
const studentGrades = new Map([
    ["Alice", 90],
    ["Bob", 85],
    ["Charlie", 92],
  ]);
  
  for (const [student, grade] of studentGrades) {
    console.log(`${student} scored ${grade}%`);
  }

//   Question 20
/**
 * The for-of loop works with iterable objects like Arrays Strings, Sets, Maps but Objects are not iterable by default, which means they don’t have the Symbol.iterator method. Symbol.iterator is a special built-in symbol in JavaScript that specifies the default iterator for an object
 */
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item); // Output: 1, 2, 3
}

// Question 21
function* fibonacciGenerator() {
    let a = 0, b = 1;
    
    while (true) { // Infinite loop
      yield a; // Produce the next number in the sequence
      [a, b] = [b, a + b]; // Update a and b
    }
  }
  
  // Use for-of loop to retrieve the first 10 Fibonacci numbers
  const fibGen = fibonacciGenerator();
  let count = 0;
  
  for (const num of fibGen) {
    console.log(num); // Output each Fibonacci number
    count++;
    if (count === 10) break; // Stop after 10 numbers
  }
  
//   Question 22
const name = "Alice";
const age = 25;

const key = "favoriteColor";

const person = {
  name,
  age,
  
  [key]: "blue",
  
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old. My favorite color is ${this.favoriteColor}.`;
  }
};
console.log(person.introduce());

// Question 23
// Computed property names let you define object properties dynamically using expressions in square brackets ([]). They are helpful when property names are unknown or need to be generated from variables or calculations
const key1 = "firstName";
const key2 = "lastName";
const key3 = "age";

const Myperson = {
  [key1]: "Alice",    
  [key2]: "Wonder",   
  [key3]: 25,         
};

console.log(Myperson);

// Question 24
function createBook(title, author, year) {
    return {
      title,
      author,
      year,
  
      getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
      }
    };
  }
  
  const book = createBook("1984", "George Orwell", 1949);
  console.log(book.getSummary()); 

// Question 25
function haveCommonElements(array1, array2) {
    const set1 = new Set(array1);
  
    for (const element of array2) {
      if (set1.has(element)) {
        return true; 
      }
    }
  
    return false; 
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 3, 8];
  const arr3 = [7, 8, 9];
  
  console.log(haveCommonElements(arr1, arr2));
  console.log(haveCommonElements(arr1, arr3)); 
  
// Question 26
/**
 * A Set ensures that all values are unique, eliminating the need to manually check for duplicates as with arrays.
 */
function hasDuplicatesSet(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
  }

//   Question 27
function removeDivisibleByThree(set) {
    for (const value of set) {
      if (value % 3 === 0) {
        set.delete(value);
      }
    }
    return set;
  }
  
  const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15]);
  console.log(removeDivisibleByThree(numbers)); 

//   Question 28
function createMapFromArray(arr, keyProp, valueProp) {
    const map = new Map();
    
    arr.forEach(item => {
      map.set(item[keyProp], item[valueProp]);
    });
  
    return map;
  }
  
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const userMap = createMapFromArray(users, 'id', 'name');
  console.log(userMap);
  
// Question 29
/**
 * Key Types: Maps can use any data type as keys (numbers, strings, objects, etc.), while plain objects are limited to strings as keys.
Iteration: Maps provide consistent iteration order (insertion order), while plain object iteration order is not guaranteed.  

 */
const map = new Map([[{ a: 1 }, 'value1'], [123, 'value2']]);
const obj = { 'key1': 'value1', 123: 'value2' };

for (const [key, value] of map) { console.log(key, value); } 
for (const key in obj) { console.log(key, obj[key]); } 

// Question 30
function swapMapKeysAndValues(originalMap) {
    const swappedMap = new Map();
    
    for (const [key, value] of originalMap) {
      swappedMap.set(value, key);
    }
  
    return swappedMap;
  }
  
  const originalMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
  
  const swappedMap = swapMapKeysAndValues(originalMap);
  console.log(swappedMap);

//   Question 31
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
        
      }, 2000); 
    });
  }
  
  fetchData()
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });
  
// Question 32
/**
 A Promise has three states: 

1. Pending: The initial state, where the asynchronous operation is in progress.  
2. Fulfilled: The operation is successful, and the Promise resolves with a value.  
3. Rejected: The operation fails, and the Promise rejects with an error.  

then() handles the fulfilled state by executing a callback with the resolved value.  
catch() handles the rejected state by executing a callback with the error.  
Both methods are used to process the outcome of a Promise.
 */

// Question 33
function processData() {
    return new Promise((resolve, reject) => {
      const number = 5; 
      if (typeof number === "number") {
        resolve(number);
      } else {
        reject(new Error("Initial value is not a number"));
      }
    })
      .then((num) => num * 2) 
      .then((doubled) => doubled.toString()) 
      .catch((error) => {
        console.error("An error occurred:", error.message);
      });
  }
  
  processData().then((result) => {
    if (result) {
      console.log("Final result:", result);
    }
  });
  
// Question 34
/**
 * In promise chaining, each .then() method must return a value (or another promise). This returned value becomes the input to the next .then() in the chain. This allows you to:

Pass data through the chain: Each .then() can process the data received from the previous one and pass the result to the next.
Control the flow: By returning a promise from a .then(), you can make the next step in the chain wait for the completion of an asynchronous operation.
 */

// Question 35
function fetchDataFromAPIs() {
    const api1 = new Promise((resolve) => {
      setTimeout(() => resolve("Data from API 1"), 1000); 
    });
  
    const api2 = new Promise((resolve) => {
      setTimeout(() => resolve("Data from API 2"), 2000); 
    });
  
    const api3 = new Promise((resolve) => {
      setTimeout(() => resolve("Data from API 3"), 1500); 
    });
  
    Promise.all([api1, api2, api3])
      .then((results) => {
        console.log("Combined results:", results);
      })
      .catch((error) => {
        console.error("An error occurred:", error.message);
      });
  }
  
  fetchDataFromAPIs();

//   Question 36
/**
 * If one Promise in Promise.all() rejects, the entire Promise.all() immediately rejects, and only the reason for the first rejection is available.
 */
Promise.allSettled(promises) 
  .then(results => { 
    // Process results, checking each result.status 
  })
  /**
   * Promise.allSettled() returns an array of objects, each describing the outcome (fulfilled or rejected) of each individual Promise. This allows you to handle successes and failures separately within the .then() block.
   */
  
//   Question 37
function validateUser(user) {
    return new Promise((resolve, reject) => {
      if (!user.username) {
        reject("Error: Username is missing");
      } else if (!user.password) {
        reject("Error: Password is missing");
      } else {
        resolve("User is valid");
      }
    });
  }
  
  const user = { username: "Alice", password: "1234" };
  
  validateUser(user)
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });
  
  const invalidUser = { username: "Bob" };
  
  validateUser(invalidUser)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error); 
    });
  
    // Question 38
    /**
     * .catch(): Specifically designed for error handling. It executes only if any promise in the chain rejects.
.then(success, failure): Provides two callbacks: the first for successful resolution, the second for rejection. This is less common than using .catch() for dedicated error handling.
Using .catch() improves code readability and maintainability by separating error handling logic from success handling.
     */