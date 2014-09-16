var fs = require('fs');
var pathToFile = process.argv[2];

var bufferString, bufferStringSplit;

function counter(callback) {
  fs.readFile(pathToFile, function (err, data) {
    bufferString = data.toString(); 
    bufferStringSplit = bufferString.split('\n'); 
    callback();
  });
}

function logMyNumber() {
  console.log(bufferStringSplit.length-1);
}

counter(logMyNumber);