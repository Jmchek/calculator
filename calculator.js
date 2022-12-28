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
    return someFunc(x,y);
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
    const equalsButton = document.querySelector('#equals');
    let firstNum = "";
    let secNum = "";
    let operator;
    let firstPairPicked = false;
    let equalsHit = false;
    let storage = 0;

    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            firstPairPicked = true;
            if (firstNum && firstPairPicked && !secNum && !equalsHit) {
                storage = parseFloat(firstNum);
            }

            
            switch(button.id) {
                case 'backspace': {
                    if(firstNum && !secNum) {
                        firstNum = firstNum.slice(0, -1);
                        if(!firstNum) {
                            firstNum = 0;
                        }
                        display(firstNum);
                    } else if (secNum) {
                        secNum = secNum.slice(0, -1);
                        if(!secNum) {
                            secNum = 0;
                        }
                        display(secNum);
                    }
                }
                break;
                case 'clear': {
                    firstPairPicked = false;
                    equalsHit = false;
                    firstNum = "";
                    secNum = "";
                    display(0);
                }
                break;
                case 'add': {
                    if (secNum) {
                        storage = operate(operator, parseFloat(storage), parseFloat(secNum));
                        display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
                        secNum = "";
                        operator = "";
                    }
                    operator = add;
                }
                break;
                case 'subtract': {
                    if (secNum) {
                        storage = operate(operator, parseFloat(storage), parseFloat(secNum));
                        display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
                        secNum = "";
                        operator = "";
                    }
                    operator = subtract;
                }
                break;
                case 'multiply': {
                    if (secNum) {
                        storage = operate(operator, parseFloat(storage), parseFloat(secNum));
                        display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
                        secNum = "";
                        operator = "";
                    }
                    operator = multiply;
                }
                break;
                case 'divide': {
                    if (secNum) {
                        storage = operate(operator, parseFloat(storage), parseFloat(secNum));
                        display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
                        secNum = "";
                        operator = "";
                    }
                    operator = divide;
                }
                break;
            }  

        });
    });
    

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
            if (!firstPairPicked){
                if (firstNum.includes(".") && button.id == "dot") {
                    firstNum = firstNum;
                } else {
                    firstNum += button.innerText;
                }
            display(firstNum);
            } else {
                if (secNum.includes(".") && button.id == "dot") {
                    secNum = secNum;
                } else {
                    secNum += button.innerText;
                }
            display(secNum);
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        equalsHit = true;
        if (operator == divide && secNum == 0) {
            display("Nice try!");
            firstPairPicked = false;
            equalsHit = false;
            firstNum = "";
            secNum = "";
            storage = "";
            display(0);
        } else if(secNum){
            storage = operate(operator, parseFloat(storage), parseFloat(secNum));
            display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
            secNum = "";
        }
    });

}

calc();