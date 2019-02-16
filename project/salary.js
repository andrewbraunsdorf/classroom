const fs = require("fs");

fs.readFile("departments.txt", 'utf8', function(err, data) {  
	 if (err) throw err;
   var arraydat = data.split(',')
   
   //for (var i = 0; i < arraydat.length; i++) {
   //	data.split(",");
   //	// var str = arraydat[i]
   //	// str = str[i].slice(1, 3) + str[i].slice(4);
   //	// 	// console.log("The data on line", i+1, "is:", data.split('\n')[i]);
   //}
   console.log(arraydat)
   
});