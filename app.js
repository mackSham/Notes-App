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
  handler: function(argv) {
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
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
})

yargs.command({
  command: 'list',
  describe: 'Lists Note',
  
  handler: function() {
    console.log('Listing Notes');
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
  handler: function() {
    console.log('Reading Note');
  }
})

yargs.parse() // This will allow to parse the argument
// console.log(yargs.argv);