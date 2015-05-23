var fs   = require("fs");
var path = require("path");

module.exports = function(dir,fl,callback){

fs.readdir(dir, function(error,list){
	if (error)
	    return callback(error);
	var lista = [];
	for(var i =0 ; i< list.length;i++){
		if(path.extname(list[i]) === "." + fl){
			lista.push(list[i]);
		}	
	}	
	callback(null, lista);
 });

} // end of module
