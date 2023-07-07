const btnNumber = document.querySelectorAll(".number_btn");
const btnOperator = document.querySelectorAll(".operator_btn");
const buttonEqual = document.getElementById("equal");
const display = document.querySelector("#display");
const active = document.querySelector("#active");

let number1 = "";
let number2 = "";
let operator;
let operatorClicked = false;
let result = "";
let operation = document.querySelector(".operation");

btnNumber.forEach((btn) => {
    btn.addEventListener('click', () => numberPressed(btn.id))
})
btnOperator.forEach((btn) => {
    btn.addEventListener('click', () => operatorPressed(btn.id));
})

buttonEqual.addEventListener('click', () => operate());

function numberPressed(id) {
    if(operatorClicked == false && number1.length <= 9){
        number1 = number1.concat(id);
        active.textContent = number1;
    } else if(operatorClicked == true && number2.length <= 10){
        number2 = number2.concat(id);
        active.innerHTML = number2;
    }
}

function operatorPressed(id){
    if(number1 != ""){
        operatorClicked = true
        operator = id
        active.textContent = ""
        switch(id){
            case "add":
                operation.innerHTML = number1 + " + "
                break;
            case "subtract":
                operation.innerHTML = number1 + " - "
                break;
            case "multiply":
                operation.innerHTML = number1 + " x "
                break;
            case "divide":
                operation.innerHTML = number1 + " / "
                break;
            default:
                break;
        }
    }
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
    if(number1 != '' && number2 != ''){
        number1 = Number(number1);
        number2 = Number(number2);

        switch(operator){
            case "add":
                operation.innerHTML = number1 + " + " + number2 + " = "
                result = add(number1, number2)
                active.innerHTML = result;
                break;
            case "subtract":
                operation.innerHTML = number1 + " - " + number2 + " = "
                result = subtract(number1, number2)
                active.innerHTML = result;
                break;
            case "multiply":
                operation.innerHTML = number1 + " x " + number2 + " = "
                result = multiply(number1, number2)
                active.innerHTML = result;
                break;
            case "divide":
                operation.innerHTML = number1 + " / " + number2 + " = "
                result = divide(number1, number2)
                active.innerHTML = result;
                break;
            default:
                break;
        }
    }
}