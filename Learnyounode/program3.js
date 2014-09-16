var p = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(p);
var str = buf.toString();
var array = str.split('\n');
console.log(array.length-1);

