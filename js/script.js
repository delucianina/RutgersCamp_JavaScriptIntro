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