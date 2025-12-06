function add(num1, num2){
    return +num1 + +num2;
};
function subtract(num1, num2) {
    return +num1 - +num2;
};
function multiply(num1, num2){
    return +num1 * +num2;
};
function divide(num1, num2) {
    if (+num2 == 0) {
        return "ERROR: Division not valid!";
    }
    else{
        return +num1 / +num2;
    };
};
function operation(num1=0, operator, num2=0){
    switch(operator){
        case '+':
            return add(num1,num2);
            
        case '-':
            return subtract(num1,num2);
            
        case '*':
            return multiply(num1,num2);
            
        case '/':
            return divide(num1,num2);
    };
};
const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#calculator-display");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const point = document.querySelector("#point");
const clearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#last-number")
let number1 = '';
let operator = '';
let operatorFlag = true;
let pointFlag = true;
let equalsFlag = true;
let number2 = '';
function clear(){
    number1="";
    operator = "";
    operatorFlag = true;
    equalsFlag = true;
    number2 = '';
    display.textContent = ''
}
numbers.forEach(function(nmbrbtn){
    nmbrbtn.addEventListener('click', function(){
        display.textContent = display.textContent + nmbrbtn.textContent;
    });
});
point.addEventListener('click', () =>{
    if (pointFlag){
        display.textContent = display.textContent + point.textContent;
        pointFlag = false;
    }
});
operators.forEach(function(oprtrbtn){
    oprtrbtn.addEventListener('click', function(){
        if (operatorFlag) {
            if (oprtrbtn.textContent === "÷"){
                operator = '/'
                console.log(operator);
                number1 = display.textContent; 
                display.textContent = '';
                operatorFlag = false;
            }
            else{
                console.log(oprtrbtn.textContent);
                operator = oprtrbtn.textContent;
                number1 = display.textContent; 
                display.textContent = '';
                operatorFlag = false;
            }
        };
    });
});
equals.addEventListener('click',()=>{
    if (equalsFlag){
        number2 = display.textContent;
        console.log(number1, operator, number2);
        display.textContent = '';
        display.textContent = operation(number1, operator, number2);
        pointFlag = true;
        equalsFlag = false;
    };
});
function removeLast(){
    let newString = display.textContent.slice(0,-1);
    display.textContent = newString;
}
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', removeLast);