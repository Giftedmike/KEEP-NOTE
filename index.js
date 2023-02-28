
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
    let item = document.getElementById("keepNote").value;
    let noteObj = {item: item, Date: new Date().toUTCString()};

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
        content += "<p>" + noteArray[i].item + "</p>" + "<hr>"
    }
    
    document.getElementById("showBoard").innerHTML = content;
}