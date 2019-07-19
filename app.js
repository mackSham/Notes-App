const paint = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Adding Command for Command line argument
yargs.command({
  command: 'add',
  describe: 'Add a new Note',
  builder:{
    //Setting Option
    title:{
      describe:'Note Title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note Body',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title,argv.body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing Note',
  builder:{
    //Setting Option
    title:{
      describe:'Note Title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

yargs.command({
  command: 'list',
  describe: 'Lists Note',
  
  handler() {
    notes.showTitles();
  }
})

yargs.command({
  command: 'read',
  describe: 'Reading Note',
  builder:{
    //Setting Option
    title:{
      describe:'Note Title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title);
  }
})

yargs.parse() // This will allow to parse the argument
// console.log(yargs.argv);