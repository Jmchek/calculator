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
                case 'clear': {
                    firstPairPicked = false;
                    equalsHit = false;
                    firstNum = "";
                    secNum = "";
                    display(0);
                }
                break;
                case 'add': operator = add;
                break;
                case 'subtract': operator = subtract;
                break;
                case 'multiply': operator = multiply;
                break;
                case 'divide': operator = divide;
                break;
            }  

            // if (secNum && !equalsHit) {
            //     storage = operate(operator, parseFloat(storage), parseFloat(secNum));
            //     display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
            //     secNum = "";
            // } 
            
            // if (secNum && equalsHit) {
            //     storage = operate(operator, parseFloat(storage), parseFloat(secNum));
            //     display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
            //     secNum = "";
            //     // equalsHit = false;
            // }

            //figuring out the +++*= bug, if you choose secnum then operator it applies that op
            if (secNum) {
                console.log(storage);
                console.log(secNum);
                storage = operate(operator, parseFloat(storage), parseFloat(secNum));
                display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
                secNum = "";
                // equalsHit = false;
            }


        });
    });
    

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
                if (!firstPairPicked){
                firstNum += button.innerText;
                display(firstNum);
                } else {
                secNum += button.innerText;
                display(secNum);
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        equalsHit = true;
        if(storage && secNum){
            storage = operate(operator, parseFloat(storage), parseFloat(secNum));
        }
        display(Number.isInteger(storage) ? storage.toFixed() : storage.toFixed(2));
        secNum = "";
    });

}

calc();