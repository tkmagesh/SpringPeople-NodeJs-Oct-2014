var fs = require("fs");


/*
fs.readFile("index2.txt",{encoding : "utf8"},function(err,data){
    //console.log(data);
    if (!err){
        console.log(data);
    } else {
        console.log(err.toString());
    }
});
*/
var readStream = fs.createReadStream("index.txt",{encoding : "utf8"});
/*
readStream.on("data",function(data){
    console.log(data);
});
readStream.on("end",function(){
    console.log("Thats all folks! - readCount = " + readCount);
});
*/

readStream.pipe(process.stdout);
