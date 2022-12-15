let operator, firstNum, secNum;

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
function displayNums() {
    const numButton = document.querySelectorAll('.just-nums');
    let firstClick = false;

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
            if (!firstClick) {
                display(button);
                firstNum = parseInt(button.innerText);
                firstClick = true;
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
            //let's fix this up to change to correct text when clicked
            //working on this
            switch(button.id) {
                case 'add': operator = add;
                case 'subtract': operator = subtract;
                case 'multiply': operator = multiply;
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
        operate(operator, firstNum, secNum);
    });
}

displayNums();
chosenOperator();
equals();




// when the user clicks the number button, we append the number until it's done e.g 99 / 11