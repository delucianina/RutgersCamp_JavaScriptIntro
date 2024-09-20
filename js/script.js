// -------------------------------------
// LEARN BASICS OF OBJECTS 
// -------------------------------------
// -------------------------------------
// AN OBJECT IS AN "ORGANIZED DATA TYPE"
// THE SYNTAX OF USING THE DOT + METHOD IS CALLED 'DOT NOTATION' 
/*
// THIS IS AN EMPTY OBJECT 
const user = {

}; // INCLUDE THE ; HERE!
*/
// -------------------------------------
// -------------------------------------
// LET'S STORE USER INFO
// SYNTAX IS SIMILAR TO CSS, BUT NOT THE SAME. i.e. - SEPARATE PROPERTIES/VALUES WITH , NOT ;
const user = {
    name: 'Nina',
    age: 31,
    phone: '555-555-5555',
    address: '1234 Market Street',
    info: {
        location: 'Philly',
        hobbies: ['jogging', 'baking'],
    },
    printAge: function() {
        console.log(this.age); //'this' keyword points to parent object
    },
    haveBirthday: function() {
        this.age++;
        console.log('Happy Birthday! You are now', this.age, 'years old!');
    },
    addHobby: function(newHobby) {
        // Need to reference an argument that is passed to addHobby (string of a hobby)
        // Push the argunent(hobby) to the info.hobbies array
        this.info.hobbies.push(newHobby);
        // this is saving it
    },
    printHobby: function() {
        //console.log the hobbies array 
        // console.log(this.info.hobbies[2]);
        // BONUS - loop over the hobbies array and console.log that 
        // In JavaScript, the standard for loop is fastest (with the 3 parts) 
        for (let i = 0; i < this.info.hobbies.length; i++) {
            console.log(this.info.hobbies[i]);
        }
        /*
        // YOU CAN MAKE A SIMPLER LOOP WITH THE OF KEYWORD - 'OF' POINTS AT THE STRING AND PRINTS AS LONG AS IT IS TRUE (EXISTS)
        for (let hobby of this.info.hobbies) {
            console.log(hobby);
        }
            */
    },
    emptyFunction: function() {
        //Empty
    }
};
// console.log()
user.addHobby('gaming');
user.printHobby(); 
// RUNNING A FUNCTION BY NAME WITHOUT CALLING IT WILL RETURN THE ENTIRE FUNCTION 
// console.log(user.emptyFunction);
/*
// PRINT THE AGE
console.log(user.age);
// PRINT THE ADDRESS 
console.log(user.address);
// CAN ALSO JUST PRINT ONE INDEXED ITEM OF STRING
console.log(user.address[8]);
*/
/* 
// THIS ERROR KILLS THE PROGRAM!
// IF YOU TRY TO DOT NOTATE SOMETHING THAT IS NOT AN OBJECT, THE ERROR WILL SAY IT CANNOT READ THE PROPERTIES. BUT UNFORTUNATELY IT WON'T SPECIFY THAT YOU AREN'T CALLING ON AN OBJECT
// console.log(null.length); 
*/
/*
// ALSO THROWS ERROR THAT IT CANNOT READ THE PROPERTY
console.log(user.height);
// IF YOU'RE GIVEN A FALSEY RESPONSE, YOU CAN USE THAT TO WRITE CONDITIONAL CODE - LIKE "YOU HAVE NOT PROVIDED THIS INFO; PLEASE GIVE IT TO US NOW"
if (!user.height) {
    console.log('You have not provided this info');
}
*/
/*
// ACCESSING NESTED DATA
console.log(user.info.hobbies[1]);
*/
/*
// PULL INFO FROM A STAR WARS API - https://swapi.dev/ - AND PRINT IT OUT TO THE CONSOLE 
fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
*/
// CALLING A FUNCTION STORED INSIDE AN OBJECT 
// user.haveBirthday();



// -------------------------------------
// -------------------------------------