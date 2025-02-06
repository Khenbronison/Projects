// QUESTION ONE
function checkAge(age){
    if(age >= 18){
        console.log("You are an adult")
    }
    else{
        console.log("You are a minor")
    }
}
checkAge(16);

// QUESION TWO
function isEven(number){
    if(number % 2 === 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
isEven(3)

// QUESTION THREE
function getGrade(score){
    if(score >= 90){
        console.log("A")
    }
    else if(score >= 80 && score <= 89){
        console.log("B")
    }
    else if(score >= 70 && score <= 79){
        console.log("C")
    }
    else if(score >= 60 && score <= 69){
        console.log("D")
    }
    else if(score < 60){
        console.log("F")
    }
}
getGrade(93)

// QUESTION 4
let lightColor = ""
let driverStatus =""
switch(lightColor){
    case "red":
        driverStatus = "Stop"
        break;
    case "yellow":
        driverStatus = "Slow down"
        break;
    case "green": 
        driverStatus = "Go"
        break;
    default:
        driverStatus = "Traffic light is down"
}

console.log(driverStatus)   

// QUESTION 5
function findLarge(a,b,c){
    return Math.max(a,b,c)
}
console.log(findLarge(2,8,4))

// QUESTION 6
for(let i = 1; i <= 10; i++){
    console.log(i)
}

// QUESTION 7
let i = 1
while(i <= 10){
    console.log(i)
    i++;
}

// QUESTION 8
function printTable(n){
    for(let i = 1; i <= 10; i++){
        let result = n * i
        console.log(`${n} * ${i} = ${result}`)
    }
}
printTable(4)

// QUESTION 9
function sumNumbers(n){
    let i = 1
    let sum = 0
    while(i <= n && n >= 1){
         sum = sum + i
        i++;
    }
    return sum;
}
console.log(sumNumbers(5))

// QUESTION 10
let num = 2
do{
    console.log("Inputed number: " + num)
    if(num < 5){
        console.log("Give me a number greater than 5")
    }
    break
}
while(num <= 5)

// QUESTION 11
// function greet(name){
//     return (`Hello, ${name}!`)
// }
// console.log(greet("Ken"))

// QUESTION 12
// const greet = function(name){
//     return (`Hello, ${name}!`)
// }
// console.log(greet("Ken"))

// QUESTION 13
const greet = name => `Hello, ${name}!`
console.log(greet("Ken"))

// QUESTION 14
const square = num => num ** 2

console.log(square(6))

// QUESTION 15
const addNumbers = function(num1,num2){
    let result = num1 + num2
    return result
}

console.log(addNumbers(2,2))

// QUESTION 16
function convertToFahrenheit(celsius){
    console.log(`Inputed temperature: ${celsius}`)
    console.log(`Converting your temperature into fahrenheit...`)
    return Fahrenheit = (celsius * 9/5) + 32
}
console.log(convertToFahrenheit(36))

// QUESTION 17
function reverseString(str){
    let newString = []
    for(char of str){
        newString.push(char)
    }
    return newString.reverse().join("")
}

console.log(reverseString("Hello"))

// QUESTION 18
let arr = [20,3,4,9,6]
function findMax(arr){
    return Math.max(...arr)
}

console.log(findMax(arr))

// QUESTION 19
let greeting = "Hello!"

function sayHello(){
    let name = "Alice"
    console.log(greeting)
}
// sayHello()
console.log(name)
// Name is not defined because it is being called outside it's scope

// QUESTION 20
function declareVariable(){
    for(let i = 0; i < 20; i++){
        let saySomething = "Hello"
    }
    console.log(saySomething)
}

declareVariable();
// It doesn't work because saySomething is been accessed outside it's scope that is the loop

// BONUS
 function isPrime(n){
    if(n % 2 === 0){
        console.log("Not a prime number")
    }
    else{
        console.log("Prime number")
    }
 }
 isPrime(15)