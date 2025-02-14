// QUESTION 1
const increaseBtn = document.getElementById("increaseBtn")

const decreaseBtn = document.getElementById("decreaseBtn")

const resetBtn = document.getElementById("resetBtn")

const doubleBtn = document.getElementById("doubleBtn")

const countNumber = document.getElementById("countNumber")

let count = 0

const increaseBtnValue = ()=>{
    count++
    countNumber.innerText = `Count: ${count}`
}

const decreaseBtnValue = ()=>{
    if(count > 0){
    count--
    countNumber.innerText = `Count: ${count}`}
}

const resetBtnValue = ()=>{
    count = 0
    countNumber.innerText = `Count: ${count}`
}

const doubleBtnValue = ()=>{
    count = count * 2
    countNumber.innerText = `Count: ${count}`
}


// QUESTION 2
const btnChanger = document.getElementById("btnChanger")

btnChanger.style.backgroundColor = "blue"
btnChanger.style.color = "white"

const changeColor = ()=>{
    if(btnChanger.style.backgroundColor === "blue"){
    btnChanger.style.backgroundColor = "black"
}

else if(btnChanger.style.backgroundColor === "black"){
    btnChanger.style.backgroundColor = "blue"
}
}

// Question 3
const name = document.getElementById("name")

const age = document.getElementById("age")

const email = document.getElementById("email")

const submitButton = document.getElementById("submitButton")

const submitButtonValue = (event)=>{
    alert(`Name: ${name.value}, Age: ${age.value}, E-mail: ${email.value}`)
    event.preventDefault()
}

// Question 4
const sayHello = document.getElementById("sayHello")

const inputButton = document.getElementById("HelloInput")

const submitHelloButton = document.getElementById("submitNameButton")

const changeHeaderName = (event)=>{
    sayHello.innerText = `Hello ${inputButton.value}`
    event.preventDefault()
}

// Question 5
const hiddenParagraph = document.getElementById("hideShowParagragh")

const hiddenButton = document.getElementById("toggleButton")

const hidandShowText = (event) => {
    if(hiddenParagraph.style.display === "none"){
        hiddenParagraph.style.display ="block"
        hiddenButton.textContent = "Hide text"
    }
    else{
        hiddenParagraph.style.display ="none"
        hiddenButton.textContent = "Show Text"
    }
}

// QUESTION 6
const textarea = document.getElementById("message");
const remaining = document.getElementById("remaining");
const maxLength = 100;

const countCharacters = ()=> {
    if (textarea.value.length > maxLength) {
        textarea.value = textarea.value.substring(0, maxLength);
    }

    remaining.textContent = maxLength - textarea.value.length;
}

// QUESTION 7
const increaseBtn2 = document.getElementById("increaseBtn2")

const decreaseBtn2 = document.getElementById("decreaseBtn2")

const clearBtn = document.getElementById("clearBtn")

const multiplyBtn = document.getElementById("multiplyBtn")

const inputedNumber = document.getElementById("numberInput")

const increaseBtnValue2 = ()=>{
    inputedNumber.value = parseInt(inputedNumber.value) + 1;
};

const decreaseBtnValue2 = ()=>{
    if(inputedNumber.value > 0){
        inputedNumber.value = parseInt(inputedNumber.value) - 1;
    }
};

const multiplyBtnBtnValue = ()=>{
    inputedNumber.value = parseInt(inputedNumber.value) * 2;
};

const clearBtnValue = ()=>{
    inputedNumber.value = 0;
};
