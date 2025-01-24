// Question 1
const factorial = num => num <= 1 ? 1 : num*factorial(num-1)
console.log(factorial(5))

// Question 2
 const numbers = [1, 2, 3, 4, 5];
 const squaredNumbers = numbers.map (num => num * num) 
 console.log(squaredNumbers);

 //Question 3
 // Per my understanding, This in a regular function allows the "this" keyword to be use such that, when the "this" is used, it references the current object within which it was called. When a new object is createad the "this" keyword refers to the newly created object but within an arrow function it has a different behavior. When it is used within a function, it throws an error once a new object is created 
 
//  function House(color) {
//     this.color = color; // 'this' refers to the new house
//   }
//   const house1 = new House
//   house1.color = "blue"
//   console.log(house1.color)

//   const House = () => this.color = 'blue';
//   const house1 = new House
//   console.log(this.color)

//   Question 4
function user (name,age, location){
    this.name = name
    this.age = age
    this.location = location

    this.greet = function(){
        return `Hello, I am ${this.name}. I am ${this.age} and i reside in ${this.location} `
    }
}
const user1 = new user ("Ken", 18, "Accra")
console.log(user1.greet())