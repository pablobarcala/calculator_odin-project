const btnNumber = document.querySelectorAll(".number_btn");
const btnOperator = document.querySelectorAll(".operator_btn");
const buttonEqual = document.getElementById("equal");
const buttonClear = document.getElementById("clear");
const active = document.querySelector("#active");

let number1 = "";
let number2 = "";
let operator = null;
let shoulResetScreen = false;
let result = "";
let operation = document.querySelector("#operation");

btnNumber.forEach((btn) => {
    btn.addEventListener('click', () => numberPressed(btn.id))
})
btnOperator.forEach((btn) => {
    btn.addEventListener('click', () => operatorPressed(btn.id));
})

buttonEqual.addEventListener('click', () => operate());
buttonClear.addEventListener('click', () => clear());

function numberPressed(id) {
    if(active.textContent === '' || shoulResetScreen){
        resetScreen();
    }
    if(result !== "") {
        active.textContent = '';
        active.textContent += id;
    } else {
        active.textContent += id;
    }
}

function resetScreen() {
    active.textContent = '';
    shoulResetScreen = false
}

function operatorPressed(id){
    if(operator !== null) operate()
    number1 = active.textContent
    operator = id
    switch(id){
        case "add":
            operation.textContent = number1 + " + "
            break;
        case "subtract":
            operation.textContent = number1 + " - "
            break;
        case "multiply":
            operation.textContent = number1 + " x "
            break;
        case "divide":
            operation.textContent = number1 + " / "
            break;
        default:
            break;
    }
    shoulResetScreen = true
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(){
    if(operation === null || shoulResetScreen) return
    if(operator === "divide" && number2 === '0'){
        alert("You can't divide by 0")
        return;
    }
    number2 = active.textContent
    number1 = Number(number1);
    number2 = Number(number2);

    switch(operator){
        case "add":
            operation.textContent = number1 + " + " + number2 + " = "
            result = add(number1, number2)
            break;
        case "subtract":
            operation.textContent = number1 + " - " + number2 + " = "
            result = subtract(number1, number2)
            break;
        case "multiply":
            operation.textContent = number1 + " x " + number2 + " = "
            result = multiply(number1, number2)
            break;
        case "divide":
            operation.textContent = number1 + " / " + number2 + " = "
            result = divide(number1, number2)
            break;
        default:
            break;
    }

    active.textContent = result;
    operator = null
}

function clear() {
    active.textContent = '';
    operation.textContent = '';
    number1 = '';
    number2 = '';
    operator = null;
}