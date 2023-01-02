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

//calc function
function calc() {
    const numButton = document.querySelectorAll('.just-nums');
    const operatorButton = document.querySelectorAll('.operators-btns');
    const equalsButton = document.querySelector('#equals');
    const bodySelector = document.querySelector('body');
    let firstNum = "";
    let secNum = "";
    let operator;
    let firstPairPicked = false;
    let equalsHit = false;
    let storage = 0;

    //operator buttons
    operatorButton.forEach((button) => {
        //key listener
        bodySelector.addEventListener('keydown', (event) => {
                switch(event.key) {
                    case 'Backspace': {
                        document.querySelector('#backspace').click();
                    }
                    break;
                    case '+': {
                        document.querySelector('#add').click();
                    }
                    break;
                    case '-': {
                        document.querySelector('#subtract').click();
                    }
                    break;
                    case '*': {
                        document.querySelector('#multiply').click();
                    }
                    break;
                    case '/': {
                        document.querySelector('#divide').click();
                    }
                    break;
                }
            });
        
        //mouse listener
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
    
    //number buttons including decimal
    numButton.forEach((button) => {
        //key listener
        switch(button.id) {
            case 'one': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit1': {
                            document.querySelector('#one').click();
                        }
                        break;
                        case 'Numpad1': {
                            document.querySelector('#one').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'two': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit2': {
                            document.querySelector('#two').click();
                        }
                        break;
                        case 'Numpad2': {
                            document.querySelector('#two').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'three': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit3': {
                            document.querySelector('#three').click();
                        }
                        break;
                        case 'Numpad3': {
                            document.querySelector('#three').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'four': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit4': {
                            document.querySelector('#four').click();
                        }
                        break;
                        case 'Numpad4': {
                            document.querySelector('#four').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'five': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit5': {
                            document.querySelector('#five').click();
                        }
                        break;
                        case 'Numpad5': {
                            document.querySelector('#five').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'six': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit6': {
                            document.querySelector('#six').click();
                        }
                        break;
                        case 'Numpad6': {
                            document.querySelector('#six').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'seven': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit7': {
                            document.querySelector('#seven').click();
                        }
                        break;
                        case 'Numpad7': {
                            document.querySelector('#seven').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'eight': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit8': {
                            document.querySelector('#eight').click();
                        }
                        break;
                        case 'Numpad8': {
                            document.querySelector('#eight').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'nine': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit9': {
                            document.querySelector('#nine').click();
                        }
                        break;
                        case 'Numpad9': {
                            document.querySelector('#nine').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'zero': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Digit0': {
                            document.querySelector('#zero').click();
                        }
                        break;
                        case 'Numpad0': {
                            document.querySelector('#zero').click();
                        }
                        break;
                    }
                })
            }
            break;
            case 'dot': {
                bodySelector.addEventListener('keydown', (event) => {
                    switch(event.code) {
                        case 'Period': {
                            document.querySelector('#dot').click();
                        }
                        break;
                        case 'NumpadDecimal': {
                            document.querySelector('#dot').click();
                        }
                        break;
                    }
                })
            }
            break;
        };

        //mouse listener
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


    //equals key/mouse listener
    bodySelector.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            document.querySelector('#equals').click();
        }
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