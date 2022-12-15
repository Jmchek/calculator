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

//function to click numbers and display them
function displayNums() {
    const numButton = document.querySelectorAll('.numbers-btns');
    console.log(numButton);
}

displayNums();

//we query select all the 'numbers' buttons
// add event listeners to each one
// store the value/content of the button clicked in a bucket 
// send the value to the display box