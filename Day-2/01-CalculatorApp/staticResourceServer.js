var fs = require("fs"),
    path = require("path"),
    url = require("url");
    
var staticResourceExtensions = [".html",".js",".css",".jpg",".png"];

String.prototype.isStaticResource = function(){
   var result = staticResourceExtensions.indexOf(path.extname(this)) !== -1;
   return result;
}

function serveStaticResource(req, res, next){
    var resourcePath = path.join(__dirname,req.url.pathname);
    if (req.url.pathname.isStaticResource()){
        console.log(req.url.pathname);
        fs.exists(resourcePath, function(exists){
            if (exists){
                fs.createReadStream(resourcePath,{encoding : "utf8"}).pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        });
    } else {
        next();
    }
}
module.exports = serveStaticResource;
