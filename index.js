
var noteArray = [];

function addNotes() {
    let item = document.getElementById("keepNote").value;
    let noteObj = {item: item, Date: new Date().toUTCString()}
    noteArray.push(noteObj);

    displayNote();
}

function displayNote() {
    for(i = 0; i < noteArray.length; i++)
    console.log(noteArray[i])
}