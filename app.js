const paint = require('chalk');
const yargs = require('yargs');


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
    console.log('Adding a new Note',argv);
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
  handler: function() {
    console.log('Removing Note');
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