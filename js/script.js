// ------------------------------------
// ------------------------------------
// MAKING A NOTE APP IN CLASS
// ------------------------------------


// DECLARE SOME GLOBAL VARIABLES 
const noteOutput = document.querySelector('.output');
const addNoteBtn = document.querySelector('#add-btn');
const randomNoteBtn = document.querySelector('#random-btn');
const noteModal = document.querySelector('#note-modal');
const noteModalTitleEl = document.querySelector('.modal-title');
const noteModalTextContentEl = document.querySelector('.modal-text-content');
const noteModalDateEl = document.querySelector('.modal-date');

const notes = [];




// FUNCTION TO PRINT THE NEW NOTE ON THE PAGE  
function outputNotes(notesArray) {
    // CLEAR HTML SO YOU DON'T PRINT OUT THE OLD NOTES TOO
    noteOutput.innerHTML = "";
    // PRINT NOTE 
    for (const noteObj of notesArray) {              
        // OUTPUT THE NEW NOTE 
        noteOutput.insertAdjacentHTML('beforeend', `
            <article class="border border-light-subtle p-3 rounded  rounded-3 text-black-75 bg-danger-subtle mb-3"> 
                <h3>${noteObj.title}</h3> 
                <p>${noteObj.textContent}</p> 
                <p>Added: ${noteObj.date}</p>
            </article> 
        `)
        }
}





// GET THE INFO YOU NEED TO CREATE NOTES/DATES 
function gatherNotes() {
    // DECLARE SOME MORE VARIABLES 
    let title;
    let textContent;
    const date = new Date();
            // DATE IS A CONSTRUCTOR: A FUNCTION THAT CREATES A NEW OBJECT
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateOutput = month + '/' + day + '/' + year;

    // WHILE LOOP TO KEEP ASKING FOR INFO UNTIL THE USER FILLS IT OUT CORRECTLY  
    let keepAsking = true;
    while (keepAsking) {
        title = prompt('Type new note title:');
        textContent = prompt('Type new note text content:');
        // IF THE TITLE OR TEXT CONTENT ARE NOT SET, ASK THEM AGAIN 
        if (title && textContent) {
            keepAsking = false;
        } else {
            alert('You must enter both fields');
        }
    }
    // CREATE THE OBJECT TO STORE THE NOTE INFO 
    const noteObject = {
        title: title,
        textContent: textContent,
        date: dateOutput,
    }
    // ADD THE NEW INFO TO THE OBJECT 
    notes.push(noteObject);

    // RETURN THAT INFO WHEN THE FUNCTION CLOSES
    return notes;
}




// GENERATE A RANDOM NUMBER TO USE AS INDEX FROM ARRAY OF NOTES 
function outputRandomNote() {
    const ranNum = Math.random();
    const index = Math.floor(ranNum * notes.length);
    const note = notes[index]; 
    console.log(note); 

    noteModalTitleEl.innerText = note.title;
    notegitModalTextContentEl.innerText = note.textContent;
    noteModalDateEl.innerText = note.date;

    $('#note-modal').modal('show'); 
    // noteModal.modal.show(); 
} 






// MAKE EVERYTHING RUN WHEN YOU CLICK THE BUTTON ON THE HTML PAGE 
addNoteBtn.addEventListener('click', function() {
    const notesData = gatherNotes();
    // DO THIS BECAUSE THE RETURN DATA IN getInfo() WOULDN'T HAVE ANYWHERE TO GO OTHERWISE
    outputNotes(notesData);
});




randomNoteBtn.addEventListener('click', outputRandomNote);




// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

// SOME PROBLEMS TO EVENTUALLY SOLVE: 

// NOTES ARE GONE WHEN YOU REFRESH THE PAGE 
// FIX THIS WITH DATABASES 


// FEATURES I'D LIKE TO ADD: 

// CANNOT EDIT NOTES 
// CANNOT REMOVE NOTES 