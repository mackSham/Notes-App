const fs = require('fs');
const getNotes = () => {
    return 'Your Notes...'
}

const addNotes = (title,body) => {
    const notes = loadNotes();
    console.log(notes);
    let flag = 0;
    notes.map(obj => {
        if(obj.title == title){
            
            flag = 1;
        }
    })
    if(flag == 0){
        notes.push({
            title:title,
            body:body
        });

        console.log("Note Added");
        saveNotes(notes);
    }else{
        console.log("Title already Exists");
    }
    

}
const removeNote = title => {
    console.log(title);
    const notes = loadNotes();
    const duplicateNotes = notes.filter(obj => {
        // console.log(obj.title != title);
         return obj.title != title
    });
    // console.log(duplicateNotes);
    if(notes.length == duplicateNotes.length){
        console.log("No Note found");
    }else{
        saveNotes(duplicateNotes);
        console.log("Note Removed");
    }
}
const loadNotes = () => {
    try{
        const notesBuffer = fs.readFileSync('notes.json');
        return JSON.parse(notesBuffer.toString());
    }catch(e){
        return [];
    } 
}

const saveNotes = (notesArray) => {
    fs.writeFileSync('notes.json',JSON.stringify(notesArray));
}
module.exports = {
    getNotes : getNotes,
    addNotes:addNotes,
    removeNote:removeNote
}