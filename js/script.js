// ------------------------------------
// ------------------------------------
// MAKING A NOTE APP 
// ------------------------------------

// VARIABLES, OBJECTS, ETC
const noteOutput = document.querySelector('.output');
const addNoteBtn = document.querySelector('#add-btn');
// DATE IS A CONSTRUCTOR - A FUNCTION THAT CREATES A NEW OBJECT
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();


// INSERT A NOTE WHEN PAGE LOADS
function getInfo() {
    const title = prompt('Type new note title:');
    const textContent = prompt('Type new note text content:');
    // USING THE CONTENT ABOVE, INSERT NEW ARTICLE INTO OUTPUT SECTION 
    noteOutput.insertAdjacentHTML('beforeend', `
        <article class="border border-light-subtle p-3 rounded rounded-3 text-black-75 bg-danger-subtle mb-3"> 
            <h3>${title}</h3> 
            <p>${textContent}</p> 
            <p>Added: ${month}/${day}/${year}</p>
        </article> 
    `)
}

// NOTES ARE GONE WHEN YOU REFRESH THE PAGE 
// FIX THIS WITH DATABASES 





// FEATURES I'D LIKE TO ADD: 
// CANNOT EDIT NOTES 
// CANNOT REMOVE NOTES 

addNoteBtn.addEventListener('click', getInfo);

// FORMS GET USER INPUT 