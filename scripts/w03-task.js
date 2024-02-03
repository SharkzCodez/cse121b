/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2,) {
    return number1 + number2;
}

let addNumbers = function () {
    const add1 = Number(document.querySelector('#add1').value);
    const add2 = Number(document.querySelector('#add2').value);


    document.querySelector('#sum').value = add (add1, add2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
    
function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
 
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
    


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}  

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
    
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.getElementById('#dividend').value);
    let divisor = Number(document.getElementById('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('#quotient').value = quotient.toFixed(1);


}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    let subtotal = Number(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;
    }


    document.getElementById('total').textContent = subtotal.toFixed(1);
}

document.getElementById('getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray

/* Output Odds Only Array */
const odds = numbersArray.filter((number) => number % 2 === 1)
document.querySelector('#odds').innerHTML = odds

/* Output Evens Only Array */
const evens = numbersArray.filter((number) => number % 2 === 0)
document.querySelector('#evens').innerHTML = evens

/* Output Sum of Org. Array */
function sumReducer(sum, numbers) {
    return sum + numbers
}
let sum = numbersArray.reduce(sumReducer);
document.querySelector('#sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map(number => number * 2)
document.querySelector('#multiplied'). innerHTML = multiplied

/* Output Sum of Multiplied by 2 Array */

function multiplySum(sum2, numbers) {
    return sum2 + numbers
}
let sum2 = numbersArray.reduce(multiplySum);
document.querySelector('#sumOfMultiplied').textContent = sum2;