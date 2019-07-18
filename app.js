const paint = require('chalk');
const getNotes = require('./notes.js');

console.log(getNotes());
console.log(paint.green.bold.inverse('SUCCESS'));