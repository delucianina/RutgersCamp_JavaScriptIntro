// MAKING FUNCTIONS 
// MAKING A SIMPLE FUNCTION HERE
// -----------------------------------------------------
/*
// YOU CAN CALL A FUNCTION BEFORE IT IS WRITTEN. THAT IS CALLED HOISTING 
doSomething();

// IN TECHNICAL TERMS, A FUNCTION THAT IS NEVER CALLED IS 'GARBAGE'. THE COMPUTER DOES NOT COMMIT IT TO MEMORY AND IT IS 'GARBAGE COLLECTED' 
function doSomething() {
    console.log('The doSomething() function ran!');
    console.log('This is the second console.log!');
    console.log('This is the third console.log!');
}

doSomething();
*/
// -----------------------------------------------------
/*
// MAKE MY OWN FUNCTION TO DISPLAY AN ARRAY 
const names = ['Izzy', 'Matt', 'City', 'Kandyce'];
function printArray() {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
printArray();

// SCOPE - LEVELS OF MEMORY (i.e. GLOBAL SCOPE; DECLARING A VARIABLE IN A FUNCTION MEANS IT IS 'SCOPED')
// LEAVING OUT THE 'LET' IN THE DECLARATION OF A FOR LOOP WILL MAKE THE VARIABLE GLOBAL. THIS IS BAD 99% OF THE TIME 
*/ 

function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

add(10, 5);
add(20, 100);
add(50, 5);

function printVals(val1, val2, val3, val4) {
    console.log(val4[1]);
}

printVals('some string text', true, 15, ['Michael', 'Nina', 'Roman']);


// WHEN YOU CALL UPON A FUNCTION, IT CAN ANSWER BACK
// BY DEFAULT, IT ANSWERS BACK UNDEFINED 
const variableResult = add();
console.log(variableResult);
// USE THE RETURN KEYWORD IN a FUNCTION TO CONTROL WHAT IT ANSWERS BACK WITH 
