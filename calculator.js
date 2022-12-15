let operator, secNum;
let firstNum = "";
let firstClick = false;
let operatorPicked = false;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(someFunc, x, y) {
    display(someFunc(x,y));
}

//function's only job is to display numbers
function display(shownNum) {
    const displayStorage = document.querySelector('#dispay-window');
    
    if(typeof shownNum == "object"){
        displayStorage.textContent = shownNum.innerText;
    } else {
        displayStorage.textContent = shownNum;
    }
    
}

//function to click numbers and display them
//need to amend this
function displayNums() {
    const numButton = document.querySelectorAll('.just-nums');

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
            if (!firstClick) {
                firstNum += button.innerText;
                display(firstNum);
            } else {
                display(button);
                secNum = parseInt(button.innerText);
            }
        });
    });
}

//function to store operator selected
function chosenOperator() {
    const operatorButton = document.querySelectorAll('.operators-btns');

    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            firstClick = true;
            operatorPicked = true;

            switch(button.id) {
                case 'add': operator = add;
                break;
                case 'subtract': operator = subtract;
                break;
                case 'multiply': operator = multiply;
                break;
                case 'divide': operator = divide;
                break;
            }
            
        });
    });
}

//the equals function
function equals() {
    const equalsButton = document.querySelector('#equals');

    equalsButton.addEventListener('click', () => {
        console.log(operator);
        console.log(firstNum);
        console.log(secNum);
        operate(operator, parseInt(firstNum), secNum);
    });
}

displayNums();
chosenOperator();
equals();



