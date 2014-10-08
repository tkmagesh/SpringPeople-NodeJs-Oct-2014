var http = require("http"),
    fs = require("fs");
var server = http.createServer(function(req,res){
    fs.createReadStream("index.html",{encoding : "utf8"}).pipe(res);
});
server.listen(8080);
console.log("Server listening on port 8080");
