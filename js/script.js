// ------------------------------------
// ------------------------------------
// LEARNING APIs
// ------------------------------------
// THIS ARGUMENT TAKES A STRING - CAN BE ANY AND ALL CSS SELECTORS 
const header = document.querySelector('h1');
const paragraph = document.querySelector('p:nth-child(2');
// const image1 = document.querySelector('#main-image');
const noteOutput = document.querySelector('.output');
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');
// ------------------------------------
// ------------------------------------
// ADD A NEW CSS CLASS TO AN ELEMENT IN HTML 
// ------------------------------------
// ADD A NEW CLASS TO AN ELEMENT 
header.classList.add('crazy');
// APPLY A NEW STYLE DIRECTLY TO AN ELEMENT INSTEAD OF USING CSS
// MUST USE CAMELCASE - CAN'T HAVE '-'
header.style.textDecoration = 'underline';
// ------------------------------------
// ------------------------------------
// GRAB AND OUTPUT THE ELEMENTS OF HTML
// ------------------------------------
// WE USED TO DO THIS A GOOD 20 YEARS AGO, NOW USE QUERY SELECTOR INSTEAD OF DOING THIS  
// console.log(document.children[0].children[1]);

// image1.setAttribute('src', 'https://images.pexels.com/photos/28403277/pexels-photo-28403277/free-photo-of-almere-central-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

// ------------------------------------
// ------------------------------------
// INSERTING A NEW ARTICLE ELEMENT INTO THE OUTPUT SELECTOR 
// ------------------------------------
// ADJACENT HTML COULD BE IN FRONT, BEHIND, INSIDE... 
// noteOutput.insertAdjacentHTML('beforeend', '<article><h1>some header</h1></article>');
// OR, INSTEAD OF QUOTATION STRING, WE CAN USE BACKTICKS - [ ` ] - TO CREATE A TEMPLATE LITERAL (or TEMPLATE STRING)  
noteOutput.insertAdjacentHTML('beforeend', `
    <article>
        <h3>New note text</h3>
        <p>Added On: 9/20/2024</p>
    </article>
`);

// ------------------------------------
// ------------------------------------
// TIMERS
// ------------------------------------
// FOR THINGS LIKE QUIZES, COUNTDOWNS, ETC. MORE COMMON THAN YOU'D THINK
// [window.] grabs the browser 
// PASSING A FUNCTION AS THE ARGUMENT - THE FUNCTION SITS AND WAITS FOR THE TIMER TO COUNT DOWN BEFORE IT RUNS 
// THEN WE SET TIME IN MS (that is 3 seconds)
/*
window.setTimeout(function() {
    console.log('Time is UP!');
}, 3000);
*/
// THIS IS CALLED A "CALLBACK" or "CALLBACK FUNCTION". WE DON'T NAME IT BECAUSE BEHIND THE SCENES THE FUNCTION HAS A PARAMETER (IN THE API WE'RE USING) 
let count = 10;
// USE BOOLEAN TO RUN TIMER ONLY ONCE 
let started = false;
// REPEAT LIKE THIS. THIS ONE STOPS AT 0
/*
const timer = setInterval(function() {
    count--;

    timerDisplay.innerText = 'Time: ' + count;

    if (count <= 0) {
        clearInterval(timer);
    }
}, 1000);
// CLEAR INTERVAL STOPS THE TIMER
*/

// EVENT LISTENER TAKES 2 TYPES OF INPUT 
timerBtn.addEventListener('click', function() {
    if (!started) {
        const timer = setInterval(function() {
            count--;
        
            timerDisplay.innerText = 'Time: ' + count;
        
            if (count <= 0) {
                clearInterval(timer);

                timerDisplay.innerText = "Time: 10";
                count = 10;
                started = false;
            }
        }, 1000);

        started = true;
    }
});
// BE CAREFUL, YOU CAN STACK INTERVALS AND RUN MULTIPLE INTERVALS AT ONCE 