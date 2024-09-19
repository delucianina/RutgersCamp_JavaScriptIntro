// -------------------------------------
// LEARN BASICS OF OBJECTS 
// -------------------------------------
// -------------------------------------

// 'OBJECT' IS A KIND OF VALUE TYPE 
// NOTES IS AN ARRAY AND OBJECT 
const notes = ['JS is cool', 'create a constant with const', 'use the src attribute on the script tag to load a js file'];
// CALL OBJECT WITH .[text] TO CALL A METHOD - LIKE [.push]
// .push('new note') ADDS A NEW NOTE TO THE ARRAY 
notes.push('.push example');
// ADD TO THE BEGINNING WITH [.unshift]
notes.unshift('.unshift example');
console.log(notes);
// YOU CAN FIND LISTS OF BUILT-IN METHODS ONLINE; INCLUDING [ .length - GIVES LENGTH OF A STRING ] or [ .pop - REMOVES LAST ITEM OF AN ARRAY] or [ .shift - REMOVES FIRST ITEM OF AN ARRAY] or [ .splice - REMOVE AN ITEM SOMEWHERE BETWEEN THE BEGINNING AND END OF AN ARRAY ] 
notes.pop();
notes.shift();
console.log(notes);
// DEMONSTRATING SLICE NEXT
const notes2 = notes; // MAKE A COPY
console.log(notes2);
notes2.splice(2, 1); // START AT INDEX 2 AND REMOVE ONE ITEM 
console.log(notes2);

// -------------------------------------
// -------------------------------------

