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
    let firstNum = "";
    let firstOfNumPairSelected = false;

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
                firstNum += button.innerText;
                display(firstNum);
                chosenOperator(firstNum, firstOfNumPairSelected);  
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

    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            // firstOfNumPairSelected = true;
            // operatorPicked = true;

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
            if (firstOfNumPairSelected){
                secondDisplayNums(firstNum, operator);
            }          
            
        });
    });

}

//find out the second pair to calc
function secondDisplayNums(firstNum, operator) {
    this.firstNum = parseInt(firstNum);
    this.operator = operator;

    //figure out why this is outputting multiple console.logs and why it's not parsing Int
    console.log(typeof firstNum);
    console.log(firstNum, operator);
}

//the equals function
function equals() {
    const equalsButton = document.querySelector('#equals');

    equalsButton.addEventListener('click', () => {
        
    });
}

displayNums();
// chosenOperator();
equals();

// figure out how to move away from global variables
// refactor equals
// refactor chosenOperator
// let's add the same functionality of firstNum to secNum WORKING ON THIS

// when the user hits the operator for the second time (or more) after the first pair is calculated the number in the display will need to update

// user inputs number (displayNums)
// pass chosen number to chosenOperator? yes
// user then selects operator, this sets the first number of pair flag to true
// once the operator is picked, we send the firstNum and operator back to displayNums and figure out the secOfNumPairSelected
// then inputs another number
// if the user at this point hits either another operator or equals, we calculate the answer and display