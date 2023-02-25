
var noteArray = [];

function addNotes() {
    let item = document.getElementById("keepNote").value;
    let noteObj = {item: item, Date: new Date().toUTCString()};

    noteArray.push(noteObj);

    displayNote();
}

function displayNote() {
    let content = "";
    for(i = 0; i < noteArray.length; i++){
        content += "<p>" + noteArray[i].item + "</p>"
    }

    document.getElementById("showBoard").innerHTML = content;
}