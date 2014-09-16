var fs = require('fs');
var path2 = require('path');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path,function(err, files){
  if (err) return err;
  for(var i = 0; i < files.length; i++){
    var fileName = files[i]; 
    if (path2.extname(files[i]) === '.' + ext)
      console.log("%s",files[i]);
  }
});