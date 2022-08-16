var someStr = {'one': 1, 'two':2,'three': 3};
var str = JSON.stringify(someStr);
var fs = require('fs');
fs.writeFile("createdJSONFile.JSON",str, function(err,result){
    if (err) console.log('error',err);
});

