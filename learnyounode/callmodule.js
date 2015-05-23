var mymodule = require("./module.js");

mymodule(process.argv[2],process.argv[3], function (error,data){
	 if(error){
	console.log("fail call");
	}
	
	for(var i=0;i<data.length;i++){
	console.log(data[i]);
	}  	

});


