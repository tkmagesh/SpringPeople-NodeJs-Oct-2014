var url = require("url");
require("http").createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    res.end();
}).listen(8080);
