const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title,body) => {
    const notes = loadNotes();
    // console.log(notes);
    // let flag = 0;
    const duplicateNote = notes.find(obj => obj.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log(chalk.green("Note Added"));
        
    }else{
        console.log(chalk.red("Title already Exists"));
    }
    

}
const removeNote = title => {
    // console.log(title);
    const notes = loadNotes();
    const duplicateNotes = notes.filter(obj => {
        // console.log(obj.title != title);
         return obj.title != title
    });
    // console.log(duplicateNotes);
    if(notes.length == duplicateNotes.length){
        console.log(chalk.red("No Note found"));
    }else{
        saveNotes(duplicateNotes);
        console.log(chalk.green("Note Removed"));
    }
}

const showTitles = () => {
    const notes = loadNotes();
    if(notes.length===0){
        console.log(chalk.red("No Title Found"));
        return;
    }
    notes.forEach(obj => {
        console.log(chalk.green(obj.title));
    });
}

const readNote = title => {
    const notes = loadNotes();
    const filteredNote = notes.find(obj => obj.title === title)
    // console.log(filteredNote);
    if(!filteredNote){
        console.log(chalk.red("Title Not found"));
    }else{
        console.log(chalk.blue(filteredNote.body));
           
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
    addNotes:addNotes,
    removeNote:removeNote,
    showTitles:showTitles,
    readNote:readNote
}