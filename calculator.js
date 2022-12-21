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
                storage = parseInt(firstNum);
            }

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

            if (secNum != "" && !equalsHit) {
                storage = operate(operator, parseInt(storage), parseInt(secNum));
                display(storage);
                secNum = "";
            } 
            
            if (secNum && equalsHit) {
                storage = operate(operator, parseInt(storage), parseInt(secNum));
                display(storage);
                secNum = "";
            }

            console.log(storage);

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
        storage = operate(operator, parseInt(storage), parseInt(secNum));
        display(storage);
        secNum = "";

        console.log(storage);
    });

}

calc();