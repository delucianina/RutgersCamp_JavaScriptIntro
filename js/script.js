let firstName = "Nina";
let age = 5;

//  If age is greater than 20 and less than 50, console log 'you are young' 

//  If age is greater than or equal to 50, console log 'you are getting up there' 

//  If age is less than 20 and greater than 12, console log 'you are a teenager' 

if (age > 12 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 50) {
    console.log("You are young.");
} else if (age >= 50) {
    console.log("You are getting up there...");
} else {
    console.log("Age is outside the program's range.");
} 


const result = 10 || "x" || false || 'some string';
console.log(result);

const result2 = 0 || 75 && true && 'some string' && true && 100;
console.log(result2);

const result3 = 0 || 75 || true && 'some string' && true && 100;
console.log(result3);