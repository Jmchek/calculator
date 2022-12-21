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
    let storage = 0;

    //add listener for operator here
    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            firstPairPicked = true;
            
            switch(button.id) {
                case 'add': {
                    operator = add;
                    
                    
                    // storage = operate(operator, firstNum, parseInt(secNum));
                    // display(storage);
                    // firstNum = "";
                    // secNum = "";
                    // console.log(storage);
                    if (firstNum && firstPairPicked && !secNum) {
                        storage = parseInt(firstNum);
                    }

                    if (secNum != "") {
                        console.log(storage);
                        storage = operate(operator, parseInt(storage), parseInt(secNum));
                        display(storage);
                        console.log(storage);
                        secNum = "";
                    }

                    

                    // if(firstPairPicked) {
                    //     storage = operate(operator, parseInt(firstNum), parseInt(secNum));
                    //     display(storage);
                    //     firstNum = storage;
                    //     secNum = "";
                    // }

                    // firstPairPicked = !firstPairPicked;

                    // console.log(storage);
                }
                break;
                case 'subtract': operator = subtract;
                break;
                case 'multiply': operator = multiply;
                break;
                case 'divide': operator = divide;
                break;
            }  

            // chosenOperator(parseInt(firstNum), numButton, operator, operatorButton); 
            // firstNum = "";
        });
    });
    

    numButton.forEach((button) => {
        button.addEventListener('click', () => {
                if (!firstPairPicked){
                firstNum += button.innerText;
                display(firstNum);
                }

                if(firstPairPicked) {
                secNum += button.innerText;
                display(secNum);
            }
        });
    });

    // numButton.forEach((button) => {
    //     button.addEventListener('click', () => {
    //             secNum += button.innerText;
    //             display(secNum); 
    //     });
    // });

    equalsButton.addEventListener('click', () => {
        // display(operate(operator, firstNum, parseInt(secNum)));
        storage = operate(operator, parseInt(firstNum), parseInt(secNum));
        display(storage);
    });

}

//function to store operator selected
// function chosenOperator(firstNum, numButton, operator, operatorButton) {
//     const equalsButton = document.querySelector('#equals');
//     this.numButton = numButton;
//     this.firstNum = firstNum;
//     this.operator = operator;
//     let secNum = "";
//     let storage = parseInt(firstNum);
//     let equalsHit = false;

//     operatorButton.forEach((button) => {
//         button.addEventListener('click', () => {
//             switch(button.id) {
//                 case 'add': {
//                     storage = operate(operator, firstNum, parseInt(secNum));
//                     display(storage);
//                     firstNum = "";
//                     secNum = "";
//                     console.log(storage);
//                     // while(!equalsHit){

//                     // }
//                 }
//                 break;
//                 case 'subtract': operator = subtract;
//                 break;
//                 case 'multiply': operator = multiply;
//                 break;
//                 case 'divide': operator = divide;
//                 break;
//             }  

//         });
//     });

//     numButton.forEach((button) => {
//         button.addEventListener('click', () => {
//                 secNum += button.innerText;
//                 display(secNum); 
//         });
//     });

//     equalsButton.addEventListener('click', () => {
//         // display(operate(operator, firstNum, parseInt(secNum)));
//         storage = operate(operator, firstNum, parseInt(secNum));
//         display(storage);
//     });

    
// }

calc();

// figuring out the logic of chaining multiple pairs

// user inputs the first number of pair
// once operator is chosen, the firstNum is sent to chosenOperator() function to be stored
// then the user selects the second number
// when the operator is hit again, the firstNum, secNum, and operator are calculated and the answer is displayed and stored
// now we need to use the stored number and operate with the second of pair