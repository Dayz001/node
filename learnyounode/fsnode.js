var fs = require ("fs");

fs.readFile(process.argv[2], function (error,data){
    if(error){
     console.log("an error has occured !!!!!");		
   }
   console.log(data.toString().split("\n").length-1);	
	
});

//var text = file.toString();

//console.log("aún no he terminado");
