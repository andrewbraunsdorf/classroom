const fs = require("fs");

fs.readFile("namecolor.txt", 'utf8', function(err, data) {  
   if (err) throw err;
   console.log("The data on line 2 is:", data.split('\n')[1]);
   
   console.log("The data on line 1 is:", data.split('\n')[0]);
});

