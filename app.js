//using the file system module

const fs = require('fs');

// syncronously--do NOT do this
// const files = fs.readdirSync('./');
// console.log(files);

//asyncronous calls a function with an error object or the file
fs.readdir('./', function(err, files) {
  if(err) console.log('Error', err);
  else console.log('Result', files);
});