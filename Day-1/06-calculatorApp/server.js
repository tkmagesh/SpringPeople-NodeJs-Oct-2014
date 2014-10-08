var http = require("http"),
    fs = require("fs"),
    path = require("path");
var server = http.createServer(function(req,res){
    var resourceName = req.url === "/" ? "index.html" : req.url,
        resourcePath = path.join(__dirname,resourceName);
    fs.exists(resourcePath, function(exists){
        if (exists){
            fs.createReadStream(resourcePath,{encoding : "utf8"}).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });

});
server.listen(8080);
console.log("Server listening on port 8080");
