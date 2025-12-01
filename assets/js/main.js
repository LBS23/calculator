function add(num1, num2){
    return +num1 + +num2;
}
function substract(num1, num2) {
    return +num1 - +num2;
}
function multiply(num1, num2){
    return +num1 * +num2;
}
function divide(num1, num2) {
    if (+num2 == 0) {
        return "You should not try that again";
    }
    else{
        return +num1 / +num2;
    }
}