
var noteArray = [];

function getNote(){
    let localNote = localStorage.getItem('notes');
    if(localNote){
        noteArray = JSON.parse(localNote);
    }else{
        noteArray = [];
    }
    
    displayNote();
}

function addNotes() {
    let item = document.getElementById("keepNoteHead").value;
    let noteBody = document.getElementById("keepNoteBody").value;
    let noteObj = {item: item, noteBody: noteBody,  Date: new Date().toUTCString()};

    noteArray.push(noteObj);

    saveNote();
    displayNote();
}

function saveNote(){
    localStorage.setItem('notes', JSON.stringify(noteArray));
}

function displayNote() {
    let content = "";
    for(i = 0; i < noteArray.length; i++){
        content += "<h4>" + noteArray[i].item + "</h4>"
        content += "<p>" + noteArray[i].Date + "</p>"
        content += "<p>" + noteArray[i].noteBody + "</p>" + "<hr>"
    }
    
    document.getElementById("showBoard").innerHTML = content;
}
function clearNote() {
    let noteArray = "";
}