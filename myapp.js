const fs = require("fs");

fs.readFile("namecolor.txt", 'utf8', function(err, data) {  
   if (err) throw err;
   var arraydat = data.split('\n')
   
   for (var i = 0; i < arraydat.length; i++) {
   		console.log("The data on line", i+1, "is:", data.split('\n')[i]);
   }
   console.log(arraydat)
   
});