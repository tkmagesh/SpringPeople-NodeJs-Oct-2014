var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    url = require("url"),
    calculator = require("./calculator");

var server = http.createServer(function(req,res){
    req.url = url.parse(req.url, true);
    if (req.url.pathname.isStaticResource()){
        serveStaticResource(req,res);
    }
    else if (req.url.pathname === "/calculate"){
        var number1 = parseInt(req.url.query.number1,10),
            number2 = parseInt(req.url.query.number2,10),
            result = calculator[req.url.query.operation](number1,number2);
        res.write(result.toString());
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end();
    }

});

var staticResourceExtensions = [".html",".js",".css",".jpg",".png"];

String.prototype.isStaticResource = function(){
   return staticResourceExtensions.indexOf(path.extname(this)) !== -1;
}

function serveStaticResource(req, res){
    var resourcePath = path.join(__dirname,req.url.pathname);
    fs.exists(resourcePath, function(exists){
        if (exists){
            fs.createReadStream(resourcePath,{encoding : "utf8"}).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });

}
server.listen(8085);
console.log("Server listening on port 8085");
