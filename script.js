const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancleBtn = document.querySelector('.cancle');
const deleteBtn = document.getElementsByClassName('.delete-note');
const deleteAllBtn = document.querySelector('.delete-all')
const notearea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;
const openPanel = () => {
    notePanel.style.display = 'flex'

}
const closePanel = () => {
    notePanel.style.display = 'none';
    textArea.value = '';
    error.style.visibility = 'hidden';
    category.selectedIndex = 0;
}
const addNote = () => {
    if (textArea.value !== '' && category.selectedIndex !== 0) {
        createNote()
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);
    newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardID})"><i class="fas fa-times icon"></i></button>
</div>
<div class="note-body">
   ${textArea.value}
</div>
</div>`
    cardID++;
    notearea.appendChild(newNote);
    textArea.value = ''
    category.selectedIndex = 0;
    notePanel.style.display = 'none'
    checkColor(newNote);
}
const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}
const checkColor = (note) => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)'
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)'
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)'
            break;
    }
}
const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id);
    notearea.removeChild(noteToDelete)
}
const deleteAllNotes = () => {
    notearea.textContent = '';
}


addBtn.addEventListener('click', openPanel)
cancleBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)