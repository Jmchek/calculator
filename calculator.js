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
function calc() {
    const numButton = document.querySelectorAll('.just-nums');
    const operatorButton = document.querySelectorAll('.operators-btns');
    let firstNum = "";
    let operator;

    //add listener for operator here THIS IS IT
    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            switch(button.id) {
                case 'add': {
                    operator = add;
                }
                break;
                case 'subtract': operator = subtract;
                break;
                case 'multiply': operator = multiply;
                break;
                case 'divide': operator = divide;
                break;
            }  

            chosenOperator(parseInt(firstNum), numButton, operator); 
        });
    });
    

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
                firstNum += button.innerText;
                display(firstNum); 
        });
    });

}

//function to store operator selected
function chosenOperator(firstNum, numButton, operator) {
    const equalsButton = document.querySelector('#equals');
    this.numButton = numButton;
    this.firstNum = firstNum;
    this.operator = operator;
    let secNum = "";

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
                secNum += button.innerText;
                display(secNum); 
        });
    });

    equalsButton.addEventListener('click', () => {
        operate(operator, firstNum, parseInt(secNum));
    });

    
}

calc();

// okay so we have the user inputs number in calc()
// once they click an operator, the number is sent off to be calculated
// figure out from here