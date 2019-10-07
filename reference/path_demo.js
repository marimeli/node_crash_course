const path = require('path');

//Base file name
console.log(__filename); //returns the absolute root with the file name
console.log(path.basename(__filename)); //returns the current filename

//Directory name
console.log(path.dirname(__filename)); // curremt directory name

// File extension
console.log(path.extname(__filename)); // ex: js


// Create path object
console.log(path.parse(__filename).base); //filename + ext

// Concantenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); //../test/hello.html






