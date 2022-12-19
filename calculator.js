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
    let firstOfNumPairSelected = false;

    //add listener for operator here THIS IS IT
    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            firstOfNumPairSelected = true;
            chosenOperator(firstNum, firstOfNumPairSelected); 
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
function chosenOperator(firstNum, firstOfNumPairSelected) {
    const operatorButton = document.querySelectorAll('.operators-btns');
    let operatorPicked = false;
    let operator;
    this.firstNum = firstNum;
    this.firstOfNumPairSelected = firstOfNumPairSelected;
    console.log(firstNum, firstOfNumPairSelected);


    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {

            switch(button.id) {
                case 'add': {
                    operator = add;
                    firstOfNumPairSelected = true;
                    operatorPicked = true;
                }
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

//find out the second pair to calc
function secondDisplayNums(firstNum, operator) {
    this.firstNum = firstNum;
    this.operator = operator;
}

//the equals function
function equals() {
    const equalsButton = document.querySelector('#equals');

    equalsButton.addEventListener('click', () => {
        
    });
}

calc();
equals();

// okay so we have the user inputs number in calc()
// once they click an operator, the number is sent off to be calculated
// figure out from here