var addbtn = document.getElementById("addbtn");

function showNotes(){
    let text = document.getElementById("text");
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesArray = [];
    }
    else{
        notesArray = JSON.parse(notes);
    }
    let html = "";
    notesArray.forEach(function (element,index){
        html += `
        <div class="box">
        <p>${element}</p>
        <div id="${index}" class="dte" onclick="deleteNote(this.id)">
        <img src="./trash.png" alt="">
        </div>
        </div>
        ` ;
    });
    let prevNotes = document.getElementById("prevNotes");
    if (notes!=null && notesArray.length!=0){
        prevNotes.innerHTML = html ;
    }
    else{
        prevNotes.innerHTML = `<p id="temp">Nothing to display here.<br>Please Add some notes first. </p>`;
    }
    
}
showNotes();
function addNote(){
    let text = document.getElementById("text");
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesArray = [];
    }
    else{
        notesArray = JSON.parse(notes);
    }
    if(text.value!="" && text.value.length<=34){
        notesArray.push(text.value);
        localStorage.setItem("notes",JSON.stringify(notesArray));
        text.value = "" ;
    }
    else{
        alert("Note can not be empty or maximum acquires 34 characters.");
    }
    showNotes();
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesArray = [];
    }
    else{
        notesArray = JSON.parse(notes);
    }
    notesArray.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesArray));
    showNotes();
    console.log("I am deleting ",index,"th this element")
}
