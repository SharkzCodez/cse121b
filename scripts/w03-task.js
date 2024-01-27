/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2,) {
    return number1 + number2;
}

let addNumbers = function (add1, add2) {
    const add1 = Number(document.querySelector('#add1').value);
    const add2 = Number(document.querySelector('#add2').value);


    document.getElementById('#sum').value = sum = add (add1, add2);
}

document.getElementById('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2,) {
    return number1 - number2;
}
    
function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
 
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
    


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2,) => {
    return number1 * number2;
}  

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
    
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
function divide (number1, number2,) {
    return number1 / number2;
}

function divideNumbers () {
    const dividend = Number(document.querySelector('#add1').value);
    const divisor = Number(document.querySelector('#add2').value);


    document.getElementById('#quotient').value = quotient = divide (dividend, divisor);
}

document.getElementById('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

/* I was unsure how to do this one, any advice would be greatly appreciated */


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray

/* Output Odds Only Array */
const odds = numbersArray.filter((number) => number % 2 === 1)
document.getElementById('#odds').innerHTML = odds

/* Output Evens Only Array */
const evens = numbersArray.filter((number) => number % 2 === 0)
document.getElementById('#evens').innerHTML = evens

/* Output Sum of Org. Array */
function sumReducer(sum, numbers) {
    return sum + numbers
}
let sum = numbersArray.reduce(sumReducer);
document.querySelector('#sumOfArray').textContent = numbers;

/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */

/* I was completely stumped on this task, but I would like to see about working through it */